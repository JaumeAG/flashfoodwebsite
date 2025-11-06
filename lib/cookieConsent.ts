export type CookieConsent = {
  essential: boolean;
  performance: boolean;
  functionality: boolean;
  marketing: boolean;
  timestamp: number;
};

const COOKIE_CONSENT_KEY = 'flashfood_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const consent: CookieConsent = JSON.parse(stored);
    
    // Verificar si el consentimiento ha expirado (más de 1 año)
    const oneYearAgo = Date.now() - (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    if (consent.timestamp < oneYearAgo) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    
    return consent;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
}

export function setCookieConsent(consent: Omit<CookieConsent, 'timestamp'>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const consentWithTimestamp: CookieConsent = {
      ...consent,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    
    // Aplicar las cookies según el consentimiento
    applyCookieConsent(consentWithTimestamp);
  } catch (error) {
    console.error('Error saving cookie consent:', error);
  }
}

export function hasCookieConsent(): boolean {
  return getCookieConsent() !== null;
}

export function applyCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  
  // Las cookies esenciales siempre se aplican
  // Guardar preferencia de cookies esenciales
  document.cookie = `flashfood_essential_consent=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  
  // Cookies de rendimiento (Google Analytics, etc.)
  if (consent.performance) {
    // Activar cookies de rendimiento
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    // Guardar cookie de preferencia
    document.cookie = `flashfood_performance_consent=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  } else {
    // Desactivar cookies de rendimiento
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', { analytics_storage: 'denied' });
    }
    // Eliminar cookie de preferencia
    document.cookie = `flashfood_performance_consent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    // Limpiar cookies de Google Analytics si existen
    document.cookie = `_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `_gid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `_gat=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  
  // Cookies de funcionalidad
  if (consent.functionality) {
    // Activar funcionalidades adicionales
    document.cookie = `flashfood_functionality_consent=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  } else {
    // Desactivar funcionalidades adicionales
    document.cookie = `flashfood_functionality_consent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  
  // Cookies de marketing
  if (consent.marketing) {
    // Activar cookies de marketing y remarketing
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', { ad_storage: 'granted' });
    }
    document.cookie = `flashfood_marketing_consent=true; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  } else {
    // Desactivar cookies de marketing
    if ((window as any).gtag) {
      (window as any).gtag('consent', 'update', { ad_storage: 'denied' });
    }
    document.cookie = `flashfood_marketing_consent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

// Función para inicializar el consentimiento de cookies al cargar la página
export function initializeCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  const consent = getCookieConsent();
  if (consent) {
    applyCookieConsent(consent);
  }
}

// Función para eliminar todas las cookies (excepto las esenciales)
export function clearNonEssentialCookies(): void {
  if (typeof window === 'undefined') return;
  
  // Eliminar cookies de terceros
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    
    // No eliminar cookies esenciales ni nuestro consentimiento
    if (!name.startsWith('flashfood_essential_') && name !== 'flashfood_cookie_consent') {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
    }
  });
  
  // Limpiar localStorage de servicios de terceros (excepto nuestro consentimiento)
  Object.keys(localStorage).forEach(key => {
    if ((key.startsWith('_ga') || key.startsWith('_gid') || key.startsWith('_gat')) && key !== COOKIE_CONSENT_KEY) {
      localStorage.removeItem(key);
    }
  });
}

// Función para obtener el estado actual de las cookies
export function getCookieStatus(): {
  essential: boolean;
  performance: boolean;
  functionality: boolean;
  marketing: boolean;
} {
  if (typeof window === 'undefined') {
    return {
      essential: true,
      performance: false,
      functionality: false,
      marketing: false,
    };
  }
  
  const consent = getCookieConsent();
  if (!consent) {
    return {
      essential: true,
      performance: false,
      functionality: false,
      marketing: false,
    };
  }
  
  return {
    essential: consent.essential,
    performance: consent.performance,
    functionality: consent.functionality,
    marketing: consent.marketing,
  };
}

