'use client';
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mockContacts = [
    {
      name: "Carlos Martínez",
      phone: "+52 555 123 4567",
    },
    {
      name: "Ana López",
      phone: "+52 555 765 4321",
    },
    {
      name: "María García",
      phone: "+52 555 987 6543",
    },
  ];
  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Sidebar derecho */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg border-l border-gray-300 p-6 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botón para cerrar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Nuevo Contacto
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contactos</h2>
        <ul className="space-y-4">
          {mockContacts.map((contact, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-gray-500">{contact.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RightSidebar;
