import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

// Configuración de la fuente Satoshi
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flashfoodapp.es'),
  title: {
    default: "FlashFood - Software para Restaurantes con Inteligencia Artificial",
    template: "%s | FlashFood"
  },
  description: "El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa. Digitaliza tu restaurante con FlashFood.",
  keywords: [
    "software restaurantes",
    "restaurantes con IA",
    "carta digital restaurante",
    "TPV restaurante",
    "gestión restaurante",
    "automatización restaurantes",
    "software hostelería",
    "app restaurantes",
    "sistema restaurante",
    "digitalización restaurantes",
    "FlashFood",
    "AURA asistente IA",
    "comandero digital",
    "fidelización clientes restaurante"
  ],
  authors: [{ name: "FlashFood" }],
  creator: "FlashFood",
  publisher: "FlashFood",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/branding/favicon.png",
    shortcut: "/branding/favicon.png",
    apple: "/branding/webclip.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://flashfoodapp.es",
    siteName: "FlashFood",
    title: "FlashFood - Software para Restaurantes con Inteligencia Artificial",
    description: "El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa.",
    images: [
      {
        url: "/branding/Light-Background_eslogan.svg",
        width: 1200,
        height: 630,
        alt: "FlashFood - Software para Restaurantes con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlashFood - Software para Restaurantes con Inteligencia Artificial",
    description: "El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa.",
    images: ["/branding/Light-Background_eslogan.svg"],
    creator: "@flashfoodapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://flashfoodapp.es",
  },
  category: "Software para Restaurantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FlashFood",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa.",
    "featureList": [
      "Carta Digital",
      "TPV",
      "Comandero Digital",
      "Asistente IA AURA",
      "Analítica Avanzada",
      "Fidelización de Clientes",
      "Gestión de Ventas"
    ],
    "screenshot": "https://flashfoodapp.es/mockups/mockup_carta_digital.png"
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlashFood",
    "url": "https://flashfoodapp.es",
    "logo": "https://flashfoodapp.es/branding/Light-Background.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-XXX-XXX-XXX",
      "contactType": "customer service",
      "email": "info@flashfoodapp.es",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/flashfood",
      "https://twitter.com/flashfoodapp"
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
