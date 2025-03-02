import React from "react";
import Link from "next/link";
import { ChevronRight, BarChart2, Clock, Users, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">BalansysCRM</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition">Características</Link>
              <Link href="#testimonials" className="text-sm text-gray-600 hover:text-blue-600 transition">Testimonios</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition">Contacto</Link>
              <Link href="/login" className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                  <span className="block text-blue-600">BalansysCRM</span>
                  <span className="block">La Solución Inteligente para la Gestión de Clientes</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  BalansysCRM es la herramienta definitiva para la gestión de clientes, automatización de ventas y optimización de procesos. Diseñado para empresas que buscan eficiencia, escalabilidad y un control total de su flujo de trabajo.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                    Solicitar Demo
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition">
                    Ver Video
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform -rotate-6 rounded-2xl shadow-xl opacity-30"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                    <img src="logo.webp" alt="BalansysCRM Dashboard" className="rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Características Principales</h2>
              <p className="mt-4 text-lg text-gray-600">Todo lo que necesitas para impulsar el crecimiento de tu negocio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Panel de Control Intuitivo</h3>
                <p className="text-gray-600">Visualiza toda tu operación en un solo lugar con nuestro dashboard inteligente y personalizable.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatización de Tareas</h3>
                <p className="text-gray-600">Ahorra tiempo con flujos de trabajo automatizados que mejoran la productividad de tu equipo.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguimiento de Clientes</h3>
                <p className="text-gray-600">Accede al historial completo de interacciones con cada cliente y no pierdas oportunidades de venta.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integración con WhatsApp</h3>
                <p className="text-gray-600">Responde rápidamente y mantén la comunicación fluida con tus clientes desde la plataforma.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
            <p className="text-lg opacity-90 mb-8">Únete a la optimización de la gestión de clientes</p>
            <a href="#" className="inline-flex items-center px-6 py-3 border border-white bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition">
              Empezar ahora
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">BalansysCRM</span>
              <p className="mt-2 text-sm">© 2025 BalansysCRM. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm hover:text-white transition">Términos</Link>
              <Link href="#" className="text-sm hover:text-white transition">Privacidad</Link>
              <Link href="#" className="text-sm hover:text-white transition">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}