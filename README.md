# 🍕 FlashFood - Plataforma de Pedidos Digital

<div align="center">
  <img src="public/branding/Light-Background.svg" alt="FlashFood Logo" width="200" height="80">
  
  **La revolución digital para restaurantes y clientes**
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📋 Descripción

FlashFood es una plataforma web moderna que revoluciona la experiencia de pedidos en restaurantes. Con un diseño elegante y funcionalidades avanzadas, conecta a los clientes con restaurantes de manera eficiente y digital.

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz elegante con gradientes y animaciones suaves
- 📱 **Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Rendimiento**: Construido con Next.js 16 y React 19 para máxima velocidad
- 🎯 **UX/UI**: Experiencia de usuario intuitiva y atractiva
- 🔒 **Páginas Legales**: Políticas de privacidad, términos y cookies completas
- 🎭 **Animaciones**: Transiciones suaves y efectos visuales atractivos
- 🌐 **SEO Ready**: Optimizado para motores de búsqueda

## 🚀 Tecnologías Utilizadas

### Frontend
- **Next.js 16.0.0** - Framework de React con App Router
- **React 19.2.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.0** - Tipado estático para JavaScript
- **Tailwind CSS 4.0** - Framework de CSS utilitario
- **Lucide React** - Iconografía moderna y consistente

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener código limpio
- **PostCSS** - Procesador de CSS
- **Radix UI** - Componentes accesibles
- **Class Variance Authority** - Gestión de variantes de clases
- **Tailwind Merge** - Fusión inteligente de clases CSS

## 📁 Estructura del Proyecto

```
flashfoodwebsite/
├── app/                          # Directorio principal de la aplicación
│   ├── globals.css              # Estilos globales y configuración de Tailwind
│   ├── layout.tsx               # Layout principal de la aplicación
│   ├── page.tsx                 # Página de inicio (Landing Page)
│   ├── privacidad/              # Página de política de privacidad
│   │   └── page.tsx
│   ├── cookies/                 # Página de política de cookies
│   │   └── page.tsx
│   └── terminos/                # Página de términos y condiciones
│       └── page.tsx
├── public/                      # Archivos estáticos
│   ├── branding/               # Logos y elementos de marca
│   └── mockups/                # Imágenes de mockups de la aplicación
├── package.json                # Dependencias y scripts del proyecto
├── tsconfig.json               # Configuración de TypeScript
├── tailwind.config.js          # Configuración de Tailwind CSS
└── postcss.config.mjs          # Configuración de PostCSS
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JaumeAG/flashfoodwebsite.git
   cd flashfoodwebsite
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Gradientes naranjas y rojos
- **Secundario**: Tonos de gris y blanco
- **Acentos**: Colores vibrantes para elementos interactivos

### Tipografía
- **Fuente Principal**: Geist Sans (optimizada por Vercel)
- **Fuente Monospace**: Geist Mono

### Componentes
- Headers responsivos con navegación
- Botones con estados hover y focus
- Cards con sombras y bordes redondeados
- Formularios con validación visual
- Modales y overlays elegantes

## 📱 Páginas Incluidas

### 🏠 Landing Page (`/`)
- Hero section con call-to-action
- Secciones de características
- Testimonios y casos de uso
- Footer completo con enlaces

### 🔒 Páginas Legales
- **Privacidad** (`/privacidad`) - Política de privacidad completa
- **Términos** (`/terminos`) - Términos y condiciones de uso
- **Cookies** (`/cookies`) - Política de cookies detallada

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otras Plataformas
- **Netlify**: Conecta tu repositorio de GitHub
- **Railway**: Deploy automático desde GitHub
- **DigitalOcean App Platform**: Deploy con Docker

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: contacto@flashfoodapp.es

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Lucide](https://lucide.dev/) - Iconografía
- [Vercel](https://vercel.com/) - Plataforma de despliegue

---

<div align="center">
  <p>Hecho con ❤️ por el equipo de FlashFood</p>
  <p>© 2025 FlashFood. Todos los derechos reservados.</p>
</div>