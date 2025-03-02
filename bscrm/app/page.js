import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="flex text-center text-4xl font-bold mb-8">
      <h1 className="relative inline-block px-6 py-3 bg-white shadow-lg rounded-lg text-blue-600">
          BalansysCRM 
        </h1>
        <h1 className="relative inline-block px-6 py-3 bg-white shadow-lg rounded-lg">
           La Solución Inteligente para la Gestión de Clientes
        </h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-40 h-6 bg-black opacity-10 blur-lg rounded-full"></div>
      </header>
      
      <p className="text-lg text-center max-w-2xl mb-6">
        BalansysCRM es la herramienta definitiva para la gestión de clientes, automatización de ventas y optimización de procesos. Diseñado para empresas que buscan eficiencia, escalabilidad y un control total de su flujo de trabajo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">💡 Panel de Control Intuitivo</h3>
          <p>Visualiza toda tu operación en un solo lugar con nuestro dashboard inteligente.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">📢 Automatización de Tareas</h3>
          <p>Ahorra tiempo con flujos de trabajo automatizados que mejoran la productividad.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">🔍 Seguimiento de Clientes</h3>
          <p>Accede al historial completo de interacciones con cada cliente y no pierdas oportunidades.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">💌 Integración con WhatsApp y Correos</h3>
          <p>Responde rápidamente y mantén la comunicación fluida con tus clientes.</p>
        </div>
      </div>
      
      <a href="#" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">🚀 Solicitar Demo</a>
    </div>
  );
}
