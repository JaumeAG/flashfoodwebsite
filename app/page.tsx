"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
// import anime from 'animejs/lib/anime.es.js'
import { 
  Smartphone, 
  QrCode, 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Play,
  Menu,
  ChefHat,
  BarChart3,
  ShoppingCart,
  Settings,
  Zap,
  Heart,
  Award,
  Clock,
  DollarSign,
  Quote,
  Lock,
  Globe,
  Database,
  Cloud,
  CreditCard,
  MessageSquare,
  Bell,
  Target,
  Rocket,
  Sparkles,
  ThumbsUp,
  Building2,
  Coffee,
  Pizza,
  Utensils,
  Wifi,
  Server,
  Key,
  Eye,
  CheckCircle2,
  Brain,
  Cpu,
  Layers,
  Activity,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  Monitor,
  Tablet,
  Laptop,
  Headphones,
  Mic,
  Camera,
  Video,
  FileText,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Maximize,
  Minimize,
  RotateCcw,
  RefreshCw,
  Power,
  Battery,
  Signal,
  Bluetooth,
  Radio,
  Satellite,
  Navigation,
  MapPin,
  Map,
  Compass,
  Route,
  Flag,
  Home,
  Building,
  Store,
  Hotel,
  Car,
  Plane,
  Train,
  Bus,
  Ship,
  Bike,
  Truck,
  Package,
  Box,
  Archive,
  Folder,
  File,
  FolderOpen,
  Trash2,
  Edit,
  Copy,
  Save,
  Bookmark,
  Tag,
  Tags,
  Filter,
  Search,
  X,
  Plus,
  Minus,
  Equal,
  Calculator,
  Hash,
  AtSign,
  Percent,
  Euro,
  Wallet,
  Banknote,
  Coins,
  Receipt,
  Ticket,
  Gift,
  Printer,
  Cake,
  Crown,
  Gem,
  Diamond,
  Trophy,
  Medal,
  Scroll,
  Book,
  BookOpen,
  Library,
  GraduationCap,
  School,
  University,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Tornado,
  Flame,
  Snowflake,
  TreePine,
  Leaf,
  Flower,
  Rose,
  Cherry,
  Apple,
  Banana,
  Carrot,
  Grape,
  Fish,
  Beef,
  Egg,
  Milk,
  Cookie,
  IceCream,
  Lollipop,
  Candy,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('restaurant')
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
                Características
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
                Características
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
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E4512F] to-[#D64A3A] backdrop-blur-sm border border-[#E4512F]/30 rounded-full text-white text-sm font-medium mb-8 shadow-xl">
              <Rocket className="w-5 h-5 mr-2 animate-pulse" />
              El futuro de la gastronomía
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-[#2E2523] to-[#2E2523] bg-clip-text text-transparent leading-tight">
              La experiencia gastronómica del futuro
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Descubre cómo FlashFood transforma cada momento en tu restaurante con tecnología de vanguardia
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#E4512F] mb-2 group-hover:scale-110 transition-transform duration-300">3x</div>
                <div className="text-sm text-gray-600">Más rápido</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#D64A3A] mb-2 group-hover:scale-110 transition-transform duration-300">+40%</div>
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

          {/* Enhanced Main Visual Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20 sm:mb-24">
            {/* Left Side - Interactive Restaurant Scene */}
            <div className="relative group">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-gray-200 group-hover:border-[#E4512F]/50 transition-all duration-500 group-hover:scale-105">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4512F]/5 to-[#D64A3A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Restaurant Interior Mockup - Enhanced */}
                <div className="bg-gradient-to-br from-[#F7F3F1]/90 to-[#F7F3F1]/90 rounded-2xl p-6 relative backdrop-blur-sm">
                  {/* Enhanced Tables with QR codes */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg relative group-hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                      <div className="w-10 h-10 bg-black rounded-lg mb-2 flex items-center justify-center group-hover:animate-pulse">
                        <QrCode className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Mesa 1</div>
                      <div className="text-xs text-green-600 font-semibold flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Ocupada
                      </div>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg relative group-hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                      <div className="w-10 h-10 bg-black rounded-lg mb-2 flex items-center justify-center">
                        <QrCode className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Mesa 2</div>
                      <div className="text-xs text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                        Libre
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Customer using phone */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/90 rounded-2xl p-6 shadow-xl relative group-hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                      <div className="w-20 h-28 bg-gray-900 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                        <Smartphone className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#E4512F]/20 to-transparent"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs text-center text-gray-600 font-medium">Cliente escaneando QR</div>
                      <div className="text-xs text-center text-[#E4512F] mt-1 font-semibold">● Conectado</div>
                    </div>
                  </div>

                  {/* Enhanced Kitchen/Bar area */}
                  <div className="bg-gradient-to-r from-[#F7F3F1]/80 to-[#F7F3F1]/80 rounded-xl p-4 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ChefHat className="w-6 h-6 text-[#E4512F] mr-2 group-hover:animate-bounce" />
                        <span className="text-sm font-semibold text-gray-700">Cocina</span>
                      </div>
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold group-hover:scale-110 transition-transform duration-300 animate-pulse">
                        Pedido #123
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">Preparando en 15 min</div>
                  </div>
                </div>

                {/* Enhanced Floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-bounce">
                  <Star className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-bounce">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Features */}
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Monitor className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E4512F] transition-colors duration-300">
                    Menú Digital Interactivo
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Los clientes escanean el QR y acceden a un menú digital completo con fotos, precios y opciones de personalización en tiempo real.
                  </p>
                  <div className="mt-4 flex items-center text-[#E4512F] font-semibold text-sm">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    Experiencia inmersiva
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Tablet className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E4512F] transition-colors duration-300">
                    Pedidos Sin Contacto
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Sistema completamente digital que reduce el tiempo de servicio y mejora la experiencia del cliente.
                  </p>
                  <div className="mt-4 flex items-center text-[#D64A3A] font-semibold text-sm">
                    <Zap className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Servicio 3x más rápido
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <PieChart className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E4512F] transition-colors duration-300">
                    Analytics en Tiempo Real
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Dashboard completo con estadísticas de ventas, productos más populares y rendimiento del negocio con IA predictiva.
                  </p>
                  <div className="mt-4 flex items-center text-[#D64A3A] font-semibold text-sm">
                    <Brain className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    Inteligencia artificial
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Restaurant Types Showcase */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg relative overflow-hidden border border-gray-200 hover:border-[#E4512F]/50 hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E4512F]/20 to-[#D64A3A]/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Coffee className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Cafeterías</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed drop-shadow-md">
                  Perfecto para cafés y bares con servicio rápido y menús estacionales que se actualizan automáticamente.
                </p>
                <div className="flex items-center text-[#E4512F] font-bold text-base drop-shadow-xl">
                  <Clock className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Servicio 2x más rápido
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg relative overflow-hidden border border-gray-200 hover:border-[#E4512F]/50 hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E4512F]/20 to-[#D64A3A]/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Pizza className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Restaurantes</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed drop-shadow-md">
                  Ideal para restaurantes con menús extensos y opciones de personalización avanzada para cada cliente.
                </p>
                <div className="flex items-center text-[#D64A3A] font-bold text-base drop-shadow-xl">
                  <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  +40% aumento en ventas
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg relative overflow-hidden border border-gray-200 hover:border-[#E4512F]/50 sm:col-span-2 lg:col-span-1 hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E4512F]/20 to-[#D64A3A]/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Truck className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Food Trucks</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed drop-shadow-md">
                  Solución móvil perfecta para eventos y ubicaciones temporales con conectividad en tiempo real.
                </p>
                <div className="flex items-center text-[#E4512F] font-bold text-base drop-shadow-xl">
                  <Wifi className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Conexión en tiempo real
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section - Interactive */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-[#F7F3F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#F7F3F1] text-[#E4512F] rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              La elección inteligente
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir FlashFood?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La solución completa con inteligencia artificial para modernizar tu restaurante y fidelizar a tus clientes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Para Clientes - Interactive */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#F7F3F1] to-[#F7F3F1] hover:from-[#F7F3F1] hover:to-[#F7F3F1] transform hover:-translate-y-2 hover:scale-105">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E4512F]/10 to-[#D64A3A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Users className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-[#E4512F] transition-colors duration-300">Para Clientes</CardTitle>
                  <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                    Experiencia gastronómica digital
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Menú digital interactivo</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Pedidos sin contacto</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Sistema de puntos y recompensas</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Pago integrado seguro</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Historial de pedidos</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-orange-200 group-hover:border-orange-300 transition-colors duration-300">
                  <div className="flex items-center text-orange-600 font-semibold text-sm">
                    <Star className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    Experiencia premium garantizada
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Para Restaurantes - Interactive */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transform hover:-translate-y-2 hover:scale-105">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Building2 className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">Para Restaurantes</CardTitle>
                  <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                    Gestión completa y moderna
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Dashboard de administración</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Estadísticas en tiempo real</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Gestión de menú digital</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Control de ventas</span>
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">QR codes para mesas</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-blue-200 group-hover:border-blue-300 transition-colors duration-300">
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <BarChart3 className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Control total de tu negocio
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resultados Comprobados - Interactive */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transform hover:-translate-y-2 hover:scale-105 md:col-span-2 lg:col-span-1">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <TrendingUp className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">Resultados Comprobados</CardTitle>
                  <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                    Impacto real en tu negocio
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl group-hover:bg-white/80 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Aumento de ventas</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 px-3 py-1 text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      +40%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl group-hover:bg-white/80 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Tiempo de servicio</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      -30%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl group-hover:bg-white/80 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Satisfacción cliente</span>
                    </div>
                    <Badge className="bg-[#F7F3F1] text-[#E4512F] px-3 py-1 text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      +60%
                    </Badge>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-green-200 group-hover:border-green-300 transition-colors duration-300">
                  <div className="flex items-center text-green-600 font-semibold text-sm">
                    <Award className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    Resultados garantizados
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section - Enhanced with Dual Perspective */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Proceso súper fácil
            </div>
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
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'restaurant' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                  onClick={() => setActiveTab('restaurant')}
                >
                  <Building2 className="w-5 h-5 mr-2 inline" />
                  Para Restaurantes
                </button>
                <button 
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'customer' 
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
                    <h5 className="font-semibold text-gray-900 mb-1">+25% Ventas</h5>
                    <p className="text-sm text-gray-600">Aumento promedio en ventas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">-40% Tiempo</h5>
                    <p className="text-sm text-gray-600">Reducción en tiempo de servicio</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-1">+60% Satisfacción</h5>
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
                  Tu sistema estará funcionando en un mínimo de 24 horas. Configuración automática y listo para usar.
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
                  Adaptamos el sistema a las necesidades específicas de tu restaurante y flujo de trabajo.
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E4512F] to-[#D64A3A] rounded-full border border-[#E4512F]/30 mb-6">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Nuevo</span>
            </div>
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

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#E4512F] to-[#D64A3A] rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
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
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E4512F] focus:border-[#E4512F] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu restaurante y cómo podemos ayudarte..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E4512F] to-[#D64A3A] hover:from-[#D64A3A] hover:to-[#E4512F] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
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
                  <a 
                    href="tel:+34900123456" 
                    className="text-[#E4512F] hover:text-[#D64A3A] font-medium text-sm transition-colors"
                  >
                    +34 900 123 456
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-4">Respuesta inmediata</p>
                  <a 
                    href="https://wa.me/34900123456" 
                    className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    +34 900 123 456
                  </a>
                </div>

                {/* Demo */}
                <div className="text-center p-6 bg-gradient-to-r from-[#E4512F] to-[#D64A3A] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                </div>
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
                Características
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
