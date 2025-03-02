'use client';
import { useState } from "react";
import { MessageCircle, X, PhoneCall } from "lucide-react";

const Webphone = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Marcacion de numeros para llamadas */}
        <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
        >
            <PhoneCall className="w-6 h-6" />
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

            {/* Formulario para marcacion de numeros */}

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Marcacion de Numeros</h2>
            <form>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numero de Telefono</label>
                <input type="text" name="phone" id="phone" autoComplete="tel" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Llamar
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Colgar
                </button>
                <span className="text-gray-500">Llamada en curso</span>
            </form>



            </div>    


      
    </>
  );
};

export default Webphone;