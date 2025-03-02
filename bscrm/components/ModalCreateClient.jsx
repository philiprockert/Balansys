'use client'
import React from "react"
import { ChevronRight, BarChart2, Clock, Users, MessageCircle } from "lucide-react"
import { useState } from 'react'

export default function ModalCreateClient({ isOpen, onClose }) {
    const [isOpenModal, setIsOpenModal] = useState(isOpen);
    const mockClient = {
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    }
    const arrayfields = 
     Object.keys(mockClient)
    
    const [form, setForm] = useState(mockClient)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        onClose()
    }


    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            
            <div className="fixed inset-0 bg-black opacity-50"></div>
            
            <div className="relative bg-white p-8 rounded-lg shadow-xl z-50">
            <button className=" fixed text-black ml-100" onClick={onClose}>X</button>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Crear Cliente</h2>

                <form onSubmit={handleSubmit}>
                        
                    {arrayfields.map((field, index) => (
                        <div key={index} className="mb-4">
                        
                            <label htmlFor={field} className="block text-sm font-medium text-gray-700">{field}</label>
                            <input
                                type="text"
                                name={field}
                                id={field}
                                value={form[field]}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Guardar
                    </button>
                </form>
                
                     
            </div>
        </div>
    )
}

