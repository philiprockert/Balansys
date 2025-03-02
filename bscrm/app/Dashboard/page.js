"use client"; // Esto es necesario en Next.js 13+ para componentes que usan librerías del lado del cliente

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los módulos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ventas",
        data: [1200, 1900, 3000, 5000, 2500, 4000],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex  bg-white">
      {/* Main Content */}
      <main className="flex-1 p-6 w-80 ">
        <header className="flex justify-between items-center bg-white p-2  rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Cerrar Sesión</button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-lg text-black font-semibold">📈 Ventas</h3>
            <p className="text-2xl text-black font-bold">$12,450</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-lg text-black font-semibold">👥 Clientes Activos</h3>
            <p className="text-2xl text-black font-bold">320</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-lg text-black font-semibold">📬 Mensajes Pendientes</h3>
            <p className="text-2xl text-black font-bold">28</p>
          </div>
        </section>

        {/* Gráfico de barras */}
        <div className="bg-white p-6 shadow-md rounded-lg mt-6">
          <h3 className="text-lg text-black font-semibold mb-4">📊 Reporte de Ventas</h3>
          <Bar data={data} />
        </div>
      </main>
    </div>
  );
}
