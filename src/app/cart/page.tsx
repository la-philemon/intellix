"use client"
import React from 'react'
import CartDrawer from '@/components/cart/CartDrawer'

export default function CartPage() {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
                <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </main>
    )
}