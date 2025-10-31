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
  title: "FlashFood - Restaurantes con IA",
  description: "El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa.",
  icons: {
    icon: "/branding/favicon.png",
    shortcut: "/branding/favicon.png",
    apple: "/branding/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
