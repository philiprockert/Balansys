'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
const SidebarLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Botón para mostrar sidebar en móvil cuando está cerrado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 z-50 p-2 rounded-lg bg-white shadow-lg border transition-all duration-300 ${
          isOpen ? 'left-60' : 'left-4'
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 fixed top-0 left-0 h-full bg-white border-r border-gray-200 
          overflow-y-auto transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 pt-16">
          <h2 className="text-xl text-blue-600 font-semibold mb-4">BSCRM</h2>
          
          <nav className="space-y-2">
            <Link href="/Dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Dashboard
            </Link>
            <Link href="/Clientes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Clientes
            </Link>
            <Link href="/ventas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Ventas
            </Link>
            <Link href="/reportes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Reportes
            </Link>
          </nav>
          
        </div>
        <div
        className="mt-auto flex items-center gap-4 p-3 bg-gray-800 bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-70 transition-all"
        whileHover={{ scale: 1.05 }}
      >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6"
>
  <circle cx="12" cy="8" r="4"></circle>
  <path d="M6 20a6 6 0 0 1 12 0"></path>
</svg>

        <div className={`${!isOpen && "hidden"}`}>
          <p className="text-sm font-semibold">John Doe</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
      </div>

      {/* Contenido principal */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? 'ml-64' : 'ml-0'
        } p-6 bg-gray-100`}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;