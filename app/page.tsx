"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { GiDonerKebab } from "react-icons/gi";
// import anime from 'animejs/lib/anime.es.js'
import {
  Smartphone,
  QrCode,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Menu,
  BarChart3,
  ShoppingCart,
  Settings,
  Zap,
  Heart,
  Award,
  Clock,
  Database,
  CreditCard,
  MessageSquare,
  Bell,
  Target,
  Rocket,
  Sparkles,
  Building2,
  Coffee,
  Pizza,
  Utensils,
  CheckCircle2,
  Brain,
  RefreshCw,
  Hotel,
  Truck,
  Gift,
  Printer,
  Sun,
  Mail,
  Phone,
  Martini,
  Hamburger,
  PartyPopper
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContentTab from "@/components/ContentTab"
import Image from 'next/image';
import { Fidelizacion } from '../components/ContentTab/Fidelizacion';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('restaurant')
  const [activeTabContent, setActiveTabContent] = useState('dashboard')

  // Estados del formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const router = useRouter()
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const handleTabContent = (tab: string) => {
    setActiveTabContent(tab);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar mensajes de error cuando el usuario empieza a escribir
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Usar PHP para enviar emails (funciona con static export)
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      let data;
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error('Error al parsear respuesta del servidor:', jsonError)
        setSubmitStatus('error')
        setSubmitMessage(`Error del servidor (${response.status}). Por favor intenta de nuevo.`)
        setIsSubmitting(false)
        return
      }

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(data.message || 'Mensaje enviado correctamente. Te responderemos pronto.')
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        const errorMsg = data?.error || `Error del servidor (${response.status}). Por favor intenta de nuevo.`
        setSubmitMessage(errorMsg)
        console.error('Error del servidor:', {
          status: response.status,
          statusText: response.statusText,
          error: data?.error,
        })
      }
    } catch (error: any) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
      setSubmitMessage(error?.message || 'Hubo un error de conexión. Por favor verifica tu conexión e intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Mockups estáticos
  const mockups = [
    {
      src: "/mockups/mockup_carta_digital.png",
      alt: "FlashFood Digital Menu",
      title: "Menú Digital",
      description: "Explora nuestra carta interactiva"
    },
    {
      src: "/mockups/mockup_carrito.png",
      alt: "FlashFood Shopping Cart",
      title: "Carrito Inteligente",
      description: "Gestiona tu pedido"
    },
    {
      src: "/mockups/mockup_perfil.png",
      alt: "FlashFood Profile",
      title: "Perfil Personal",
      description: "Gestiona tu cuenta"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#F7F3F1] to-[#F7F3F1]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src="/branding/Light-Background.svg"
                  alt="FlashFood Logo"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-[#E4512F] transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                Características y beneficios
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-[#E4512F] transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => scrollToSection('aura-assistant')}
                className="text-gray-700 hover:text-[#E4512F] transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                AURA
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-[#E4512F] transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#E4512F] transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                Contacto
              </button>

            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-[#E4512F] hover:bg-[#F7F3F1]"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Sticky */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay para cerrar el menú */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menú móvil */}
          <div className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              <button
                onClick={() => {
                  scrollToSection('features')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium py-2"
              >
                Características y beneficios
              </button>
              <button
                onClick={() => {
                  scrollToSection('how-it-works')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium py-2"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => {
                  scrollToSection('aura-assistant')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium py-2"
              >
                AURA
              </button>
              <button
                onClick={() => {
                  scrollToSection('team')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium py-2"
              >
                Equipo
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium py-2"
              >
                Contacto
              </button>

            </div>
          </div>
        </>
      )}

      {/* Hero Section - Qamarero Style */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#F7F3F1] to-white">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              {/* Badge */}
              {/* <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E4512F] to-[#D64A3A] rounded-full border-2 border-[#E4512F]/20 shadow-lg">
                <Brain className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-bold text-sm">APP RESTAURANTES CON IA 2025</span>
              </div> */}

              {/* Main Headline */}
              <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Digitaliza tu</span>
                <span className="block text-gray-900">restaurante y</span>
                <span className="block text-[#E4512F]">automatiza procesos</span>
                <span className="block text-gray-900">con la IA de FlashFood</span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="mb-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
                El software todo en uno para restaurantes con inteligencia artificial que te ahorra tiempo, reduce costes y cumple con la normativa.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-[#E4512F] mr-3 flex-shrink-0" />
                  <span className="text-lg font-medium">Soporte 365</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-[#E4512F] mr-3 flex-shrink-0" />
                  <span className="text-lg font-medium">Todo en Uno</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-[#E4512F] mr-3 flex-shrink-0" />
                  <span className="text-lg font-medium">Potenciado con IA</span>
                </div>
              </div>
            </div>

            {/* Right Section - Mockups */}
            <div className={`hidden lg:flex items-center justify-center space-x-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              {/* Smartphone Mockup */}
              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/mockups/mockup_carta_digital.png"
                  alt="Carta digital FlashFood"
                  className="w-96 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Tablet Mockup */}
              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-300 mt-8">
                <img
                  src="/mockups/mockup_carrito.png"
                  alt="Carrito FlashFood"
                  className="w-[28rem] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section - Enhanced */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#F7F3F1] text-gray-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E4512F]/5 via-[#D64A3A]/3 to-[#E4512F]/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E4512F]/3 rounded-full blur-3xl -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D64A3A]/3 rounded-full blur-3xl translate-x-48 translate-y-48 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#E4512F]/3 to-[#D64A3A]/3 rounded-full blur-2xl -translate-x-32 -translate-y-32 animate-bounce"></div>

        <div className="max-w-7xl mx-auto relative">
          {/* Enhanced Header */}
          <div className="text-center mb-20 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-[#2E2523] to-[#2E2523] bg-clip-text text-transparent leading-tight">
              Un sistema sencillo y fácil de usar
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Te facilita la gestión de tu restaurante, te ahorra tiempo y dinero.
            </p>


            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#E4512F] mb-2 group-hover:scale-110 transition-transform duration-300">x2</div>
                <div className="text-sm text-gray-600">Más rápido</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#D64A3A] mb-2 group-hover:scale-110 transition-transform duration-300">+17%</div>
                <div className="text-sm text-gray-600">Más ventas</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#E4512F] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#D64A3A] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-600">Digital</div>
              </div>
            </div>
          </div>

          {/* Alternating Image-Text Sections */}
          <div className="space-y-16 lg:space-y-24 mb-20 sm:mb-24">
            {/* Row 1: Image left, Text right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative">
                <img
                  src="/bannerweb/2149303447.jpg"
                  alt="Persona escaneando un código QR con el móvil"
                  className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Los clientes piden desde su móvil</h3>
                <div className="mt-10 flex flex-col space-y-6 max-w-2xl mx-auto text-left">
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <QrCode className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">Escanea el QR, ve el menú y pide al momento.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">El pedido llega a cocina/barra organizado, sin errores.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">Pago y facturas al instante; todo queda registrado.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <Gift className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">El cliente recibe su fidelización.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Text left, Image right */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">El equipo recibe todo al instante</h3>
                <div className="mt-10 flex flex-col space-y-6 max-w-2xl mx-auto text-left">
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">Pedidos organizados y visibles al momento.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">Menos errores y mejor coordinación.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#E4512F]" />
                    </div>
                    <p className="text-gray-700 leading-snug">Servicio más rápido y eficiente.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <img
                  src="/bannerweb/2452.jpg"
                  alt="Camarero tomando nota en una mesa"
                  className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Tipos de negocios compatibles */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Para todo tipo de negocios</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Martini className="w-4 h-4 text-[#E4512F]" /> Pubs
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Hamburger className="w-4 h-4 text-[#E4512F]" /> Hamburgueserías
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Pizza className="w-4 h-4 text-[#E4512F]" /> Pizzerías
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Sun className="w-4 h-4 text-[#E4512F]" /> Chiringuitos
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Truck className="w-4 h-4 text-[#E4512F]" /> Food trucks
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Hotel className="w-4 h-4 text-[#E4512F]" /> Hoteles
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Utensils className="w-4 h-4 text-[#E4512F]" /> Restaurantes
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <Coffee className="w-4 h-4 text-[#E4512F]" /> Cafeterías
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <GiDonerKebab className="w-4 h-4 text-[#E4512F]" /> Kebabs
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F5] border border-[#E4512F]/30 text-[#2E2523] shadow-sm">
              <PartyPopper className="w-4 h-4 text-[#E4512F]" /> Discotecas
            </span>
          </div>
        </div>
      </section>

      {/* Features Section - Interactive */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#F7F3F1] overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Soluciones que transforman tu negocio: gana más, trabaja menos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aquí encontrarás las herramientas que realmente marcan la diferencia. Desde IA hasta pedidos digitales, estas soluciones no son opcionales, son las que te harán crecer. Es momento de digitalizar tu negocio y cambiar las reglas del juego.
            </p>
          </div>
          <div className="grid ">
            <div className="w-full flex flex-col items-center bg-gray-100 rounded-2xl p-4 border border-gray-200 min-w-0">
              <div className="bg-white w-full max-w-full flex items-center flex-nowrap md:flex-wrap justify-start md:justify-between gap-2 sm:gap-3 border border-gray-200 rounded-2xl sm:p-4 pr-4 overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal [-webkit-overflow-scrolling:touch] snap-x md:snap-none snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain -mx-4 sm:mx-0 min-w-0">

                <button className={activeTabContent === 'dashboard' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('dashboard')}>Dashboard</button>

                {/* <button className={activeTabContent === 'tpv' ? 'bg-[#E4512F] text-white border border-gray-200 border-rounded-2xl p-2 rounded-2xl cursor-pointer' : 'bg-white text-black cursor-pointer'} onClick={() => handleTabContent('tpv')}>TPV</button> */}

                <button className={activeTabContent === 'carta-digital' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('carta-digital')}>Carta Digital</button>

                <button className={activeTabContent === 'analitica' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('analitica')}>Analítica</button>

                <button className={activeTabContent === 'ventas' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('ventas')}>Ventas</button>

                <button className={activeTabContent === 'comandero' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('comandero')}>Comandero</button>

                <button className={activeTabContent === 'asistente-ia' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('asistente-ia')}>Asistente IA</button>

                <button className={activeTabContent === 'clientes' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('clientes')} >Clientes</button>

                <button className={activeTabContent === 'fidelizacion' ? 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-[#E4512F] text-white border border-gray-200 rounded-2xl px-4 py-2 text-sm sm:text-base shadow-sm cursor-pointer' : 'snap-center min-w-[112px] sm:min-w-0 shrink-0 md:shrink bg-white text-gray-700 hover:text-[#E4512F] rounded-2xl px-4 py-2 text-sm sm:text-base border border-transparent hover:border-[#E4512F]/30 cursor-pointer'} onClick={() => handleTabContent('fidelizacion')}>Fidelización</button>


              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200 overflow-x-hidden">
                <ContentTab contentTab={activeTabContent} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Enhanced with Dual Perspective */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cómo funciona FlashFood
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo FlashFood transforma la experiencia tanto para restaurantes como para clientes
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              <div className="flex space-x-2">
                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'restaurant'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  onClick={() => setActiveTab('restaurant')}
                >
                  <Building2 className="w-5 h-5 mr-2 inline" />
                  Para Restaurantes
                </button>
                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'customer'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  onClick={() => setActiveTab('customer')}
                >
                  <Users className="w-5 h-5 mr-2 inline" />
                  Para Clientes
                </button>
              </div>
            </div>
          </div>

          {/* Restaurant Perspective */}
          {activeTab === 'restaurant' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cómo FlashFood ayuda a tu restaurante
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Optimiza operaciones, aumenta ventas y mejora la experiencia del cliente con nuestra plataforma integral
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {/* Paso 1 - Configuración */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <Settings className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      Configura tu menú
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Sube tu menú, configura precios, ingredientes y disponibilidad. Personaliza categorías y opciones de personalización.
                    </p>
                    <div className="mt-6 flex items-center justify-center text-orange-600 font-semibold text-sm">
                      <Database className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Gestión completa
                    </div>
                  </div>
                </div>

                {/* Paso 2 - QR Codes */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <QrCode className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Coloca códigos QR
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Imprime y coloca los códigos QR en cada mesa. Los clientes escanean y acceden directamente a tu menú digital.
                    </p>
                    <div className="mt-6 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      <Printer className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Acceso instantáneo
                    </div>
                  </div>
                </div>

                {/* Paso 3 - Gestión */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <BarChart3 className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">
                      Gestiona pedidos
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Recibe pedidos en tiempo real, gestiona inventario, analiza ventas y optimiza tu negocio con datos en tiempo real.
                    </p>
                    <div className="mt-6 flex items-center justify-center text-green-600 font-semibold text-sm">
                      <TrendingUp className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Análisis completo
                    </div>
                  </div>
                </div>
              </div>

              {/* Restaurant Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Beneficios para tu restaurante</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">+17% Ventas</h5>
                    <p className="text-sm text-gray-600">Aumento promedio en ventas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">-25% Tiempo</h5>
                    <p className="text-sm text-gray-600">Reducción en tiempo de servicio</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">+50% Satisfacción</h5>
                    <p className="text-sm text-gray-600">Mejora en experiencia cliente</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Datos en tiempo real</h5>
                    <p className="text-sm text-gray-600">Análisis y reportes automáticos</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Perspective */}
          {activeTab === 'customer' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cómo FlashFood mejora tu experiencia
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Disfruta de una experiencia gastronómica moderna, rápida y personalizada
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {/* Paso 1 - Escanea QR */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <QrCode className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      Escanea QR
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Escanea el código QR en tu mesa y accede instantáneamente al menú digital del restaurante
                    </p>
                    <div className="mt-6 flex items-center justify-center text-orange-600 font-semibold text-sm">
                      <Smartphone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Acceso instantáneo
                    </div>
                  </div>
                </div>

                {/* Paso 2 - Haz tu pedido */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <ShoppingCart className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Haz tu pedido
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Navega por el menú, personaliza tu comida según tus preferencias y realiza el pedido con un solo clic
                    </p>
                    <div className="mt-6 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      <Menu className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Personalización total
                    </div>
                  </div>
                </div>

                {/* Paso 3 - Gana puntos */}
                <div className="text-center group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                        <Star className="w-12 h-12 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">
                      Gana puntos
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Acumula puntos con cada pedido y canjéalos por descuentos, productos gratis y recompensas exclusivas
                    </p>
                    <div className="mt-6 flex items-center justify-center text-green-600 font-semibold text-sm">
                      <Gift className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Recompensas exclusivas
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Beneficios para ti como cliente</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Pedidos más rápidos</h5>
                    <p className="text-sm text-gray-600">Sin esperar al camarero</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Menu className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Menú interactivo</h5>
                    <p className="text-sm text-gray-600">Fotos, ingredientes y alergenos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Programa de fidelidad</h5>
                    <p className="text-sm text-gray-600">Puntos y recompensas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">Pago seguro</h5>
                    <p className="text-sm text-gray-600">Múltiples métodos de pago</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
          </div>
        </div>
      </section>



      {/* Installation & Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Instalación rápida y soporte completo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Te acompañamos en cada paso para que tu restaurante esté funcionando en tiempo récord
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Instalación rápida</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Tu sistema estará funcionando en un mínimo de 48 horas. Configuración automática y listo para usar.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Formación Incluida</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Sesiones de formación personalizadas para todo tu equipo. Aprende a usar todas las funciones.
                </p>
              </CardContent>
            </Card>


            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Configuración Personalizada</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Adaptamos el sistema a tus necesidades específicas de tu restaurante y flujo de trabajo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Migración de Datos</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Migramos todos tus datos existentes sin pérdida de información. Transición sin interrupciones.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* AURA Assistant Section */}
      <section id="aura-assistant" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#F7F3F1] text-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E4512F]/5 via-[#D64A3A]/3 to-[#E4512F]/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#E4512F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D64A3A]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#E4512F]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#2E2523] to-[#2E2523] bg-clip-text text-transparent">
              Conoce a AURA, tu asistente inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AURA es tu asistente personal de IA diseñado específicamente para hosteleros.
              Trabaja continuamente para optimizar tu negocio, desde análisis de ventas hasta gestión operativa.
            </p>
          </div>

          {/* Main AURA Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - AURA Interface Mockup */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 relative overflow-hidden">
                {/* AURA Chat Interface */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center mr-3">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">AURA</h3>
                        <p className="text-xs text-gray-400">Asistente Inteligente</p>
                      </div>
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      En línea
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-200">
                          Hola! He analizado tus ventas de esta semana y veo que las pizzas están siendo muy populares.
                          ¿Te ayudo a optimizar tu menú?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">
                          Sí, ¿qué me recomiendas?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-200">
                          Basándome en tus datos de ventas, te recomiendo:
                          <br />• Destacar la Pizza Margherita (más vendida)
                          <br />• Crear un combo pizza + bebida
                          <br />• Ajustar precios según demanda
                          <br />
                          <br />¿Quieres que implemente estos cambios?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">
                          Sí, adelante
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 max-w-xs border border-green-500/30">
                        <p className="text-sm text-green-300">
                          ✅ Cambios aplicados. Tu menú está optimizado para maximizar ventas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - AURA Capabilities */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-[#2E2523] to-[#2E2523] bg-clip-text text-transparent">
                  ¿Qué puede hacer AURA por ti?
                </h3>
                <p className="text-gray-600 text-lg">
                  AURA es más que un chatbot. Es tu socio inteligente diseñado específicamente para hosteleros,
                  que entiende las necesidades únicas de tu restaurante y trabaja para optimizar tu rentabilidad.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Optimización de Menú Inteligente</h4>
                    <p className="text-gray-600">
                      AURA analiza tus datos de ventas y comportamiento de clientes para sugerir optimizaciones de menú,
                      precios y promociones que maximicen tus ingresos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Análisis Predictivo Avanzado</h4>
                    <p className="text-gray-600">
                      Analiza tendencias, clima, eventos locales y comportamiento de clientes para predecir
                      demanda y sugerir estrategias de venta optimizadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Clientes Inteligente</h4>
                    <p className="text-gray-600">
                      AURA te ayuda a gestionar mejor a tus clientes: analiza sus preferencias, identifica clientes VIP,
                      sugiere estrategias de fidelización y optimiza la experiencia del cliente en tu restaurante.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Automatización de Procesos</h4>
                    <p className="text-gray-600">
                      Automatiza tareas repetitivas como reportes, facturación, gestión de personal
                      y optimización de horarios para maximizar la eficiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AURA Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 hover:border-[#E4512F]/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Asistente Personal para Hosteleros</h3>
                <p className="text-gray-600 text-sm">
                  Conversa con AURA sobre tu negocio en lenguaje natural. Entiende las necesidades específicas
                  de la hostelería y aprende de cada interacción para ayudarte mejor.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 hover:border-[#E4512F]/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Alertas de Negocio</h3>
                <p className="text-gray-600 text-sm">
                  Recibe notificaciones inteligentes sobre oportunidades de venta, tendencias del mercado
                  y recomendaciones específicas para tu restaurante.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 hover:border-[#E4512F]/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Automatización Operativa</h3>
                <p className="text-gray-600 text-sm">
                  AURA automatiza tareas operativas como generar reportes de ventas, crear promociones
                  automáticas y optimizar horarios de personal para tu restaurante.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* AURA Benefits */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegir AURA?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                AURA no es solo una herramienta, es tu socio inteligente diseñado específicamente para hosteleros,
                que crece contigo y se adapta a las necesidades únicas de tu restaurante.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Disponible siempre</h4>
                <p className="text-gray-600 text-sm">Trabaja continuamente para optimizar tu restaurante</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Aprende Continuamente</h4>
                <p className="text-gray-600 text-sm">Mejora sus recomendaciones con cada interacción</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalizado</h4>
                <p className="text-gray-600 text-sm">Se adapta a las características únicas de tu negocio</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Resultados Medibles</h4>
                <p className="text-gray-600 text-sm">Aumenta eficiencia y reduce costos operativos</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#F7F3F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Nuestro equipo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Personas encargadas del proyecto, comprometidas con tu éxito.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Member 1 */}
            {/* <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFF0EB] flex items-center justify-center text-[#E4512F] text-2xl font-bold">AG</div>
              <h3 className="text-lg font-semibold text-gray-900">Ana García</h3>
              <p className="text-sm text-gray-600">CEO & Estrategia</p>
              <p className="mt-3 text-sm text-gray-600">Visión de producto y crecimiento.</p>
            </div> */}

            {/* Member 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFF0EB] flex items-center justify-center text-[#E4512F] text-2xl font-bold"><Image
                src="/imageTeam/jaumefoto-bw.png"
                alt="Santi Llinares"
                width={80}
                height={80}
                sizes="(max-width: 640px) 64px, 80px"
                className="rounded-full object-cover w-full h-full"
              /></div>
              <h3 className="text-lg font-semibold text-gray-900">Jaume Alcántara</h3>
              <p className="text-sm text-gray-600">CTO & Co-Founder</p>
              <p className="mt-3 text-sm text-gray-600">Director de arquitectura, seguridad y rendimiento.</p>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFF0EB] flex items-center justify-center text-[#E4512F] text-2xl font-bold"><Image
                src="/imageTeam/ivanfoto-bw.jpeg"
                alt="Santi Llinares"
                width={80}
                height={80}
                sizes="(max-width: 640px) 64px, 80px"
                className="rounded-full object-cover w-full h-full"
              /></div>
              <h3 className="text-lg font-semibold text-gray-900">Iván Rodríguez</h3>
              <p className="text-sm text-gray-600">CGO & Co-Founder</p>
              <p className="mt-3 text-sm text-gray-600">Director de expansión y desarrollo de productos.</p>
            </div>

            {/* Member 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-[#FFF0EB] flex items-center justify-center overflow-hidden">
                <Image
                  src="/imageTeam/santifoto-bw.jpg"
                  alt="Santi Llinares"
                  width={80}
                  height={80}
                  sizes="(max-width: 640px) 64px, 80px"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Santi Llinares</h3>
              <p className="text-sm text-gray-600">CCO & Co-Founder</p>
              <p className="mt-3 text-sm text-gray-600">Director de marketing y ventas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"> */}
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Planes para cada restaurante
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Elige el plan que mejor se adapte a tu negocio
            </p>
          </div> */}

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"> */}
      {/* Plan Básico */}
      {/* <Card className="border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 flex flex-col h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-gray-900">€49,90<span className="text-lg text-gray-500">/mes</span></div>
                <CardDescription>Perfecto para empezar</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Pedidos ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Menú digital básico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    QR codes ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Sistema de puntos básico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Hasta 3 usuarios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Soporte por email
                  </li>
                </ul>
                <Button className="w-full mt-auto" variant="outline" onClick={() => window.location.href = '/contratar'}>
                  Contratar
                </Button>
              </CardContent>
            </Card> */}

      {/* Plan Premium */}
      {/* <Card className="border-2 border-orange-500 relative hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold text-gray-900">€85,90<span className="text-lg text-gray-500">/mes</span></div>
                <CardDescription>Para restaurantes en crecimiento</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Pedidos ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Usuarios ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Fichaje de empleados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Dashboard completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Sistema de puntos avanzado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Estadísticas avanzadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Soporte prioritario
                  </li>
                </ul>
                <Button className="w-full mt-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" onClick={() => window.location.href = '/contratar'}>
                  Contratar
                </Button>
              </CardContent>
            </Card> */}

      {/* Plan Enterprise */}
      {/* <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 flex flex-col h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900">Personalizado</div>
                <CardDescription>Para grandes restaurantes</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Todo de Premium
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Integraciones personalizadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Múltiples ubicaciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Gerente de cuenta dedicado
                  </li>
                </ul>
                <Button className="w-full mt-auto" variant="outline">
                  Contactar Ventas
                </Button>
              </CardContent>
            </Card> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* Sección de Contacto */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-[#F7F3F1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para revolucionar tu restaurante?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Contacta con nuestro equipo y descubre cómo FlashFood puede transformar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Formulario de Contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h3>
                <p className="text-gray-600">Te responderemos en menos de 2 horas</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">{submitMessage}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{submitMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors"
                      placeholder="Tu nombre"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors"
                    placeholder="+34 600 000 000"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu restaurante y cómo podemos ayudarte..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#E4512F] to-[#D64A3A] hover:from-[#D64A3A] hover:to-[#E4512F] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>

            {/* Canales de Contacto */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">O contacta directamente</h3>
                <p className="text-gray-600">Elige tu canal preferido</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#E4512F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-[#E4512F]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm mb-4">Respuesta en 2 horas</p>
                  <a
                    href="mailto:info@flashfoodapp.es"
                    className="text-[#E4512F] hover:text-[#D64A3A] font-medium text-sm transition-colors"
                  >
                    info@flashfoodapp.es
                  </a>
                </div>

                {/* Teléfono */}
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#E4512F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[#E4512F]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                  <p className="text-gray-600 text-sm mb-4">Lun-Vie 9:00-18:00</p>
                  <span className="flex flex-col">
                    <a
                      href="tel:+34900123456"
                      className="text-[#E4512F] hover:text-[#D64A3A] font-medium text-sm transition-colors"
                    >
                      +34 676 91 73 86
                    </a>
                    <a
                      href="tel:+34900123456"
                      className="text-[#E4512F] hover:text-[#D64A3A] font-medium text-sm transition-colors"
                    >
                      +34 627 48 28 12
                    </a>
                  </span>
                </div>

                {/* WhatsApp */}
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacta con Iván</h3>
                  <p className="text-gray-600 text-sm mb-4">¡Responde rápido, créenos!</p>
                  <a
                    href="https://wa.me/34676917386"
                    className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    +34 676 91 73 86
                  </a>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacta con Santi</h3>
                  <p className="text-gray-600 text-sm mb-4">¡Responde rápido, créenos!</p>
                  <a
                    href="https://wa.me/34627482812"
                    className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    +34 627 48 28 12
                  </a>
                </div>

                {/* Demo */}
                {/* <div className="text-center p-6 bg-gradient-to-r from-[#E4512F] to-[#D64A3A] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Demo Gratis</h3>
                  <p className="text-white/90 text-sm mb-4">Prueba sin compromiso</p>
                  <a
                    href="#contact"
                    className="text-white hover:text-white/90 font-medium text-sm transition-colors"
                  >
                    Solicitar Demo
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src="/branding/Light-Background.svg"
                  alt="FlashFood Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-sm">
              <a href="#features" className="text-gray-600 hover:text-brand-primary transition-colors">
                Características y beneficios
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-brand-primary transition-colors">
                Cómo funciona
              </a>
              <a href="#aura-assistant" className="text-gray-600 hover:text-brand-primary transition-colors">
                AURA
              </a>
              <a href="#contact" className="text-gray-600 hover:text-brand-primary transition-colors">
                Contacto
              </a>
              <a href="#team" className="text-gray-600 hover:text-brand-primary transition-colors">
                Equipo
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500">
              <p>© 2025 FlashFood. Todos los derechos reservados.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="/privacidad" className="hover:text-brand-primary transition-colors">Privacidad</a>
                <span>•</span>
                <a href="/terminos" className="hover:text-brand-primary transition-colors">Términos</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-brand-primary transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
