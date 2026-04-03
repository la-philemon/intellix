"use client"
import React from 'react'
import { useCartStore } from '@/store/cart.store'
import Image from 'next/image'

function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { items, removeFromCart, updateQuantity, clearCart } = useCartStore()
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b bg-gray-50">
                        <h2 className="text-xl font-bold">Shopping Cart ({items.length})</h2>
                        <button
                            onClick={onClose}
                            className="text-3xl text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <p className="text-lg">Your cart is empty</p>
                                <button
                                    onClick={onClose}
                                    className="mt-4 text-[#4EE0F4] hover:underline"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 mb-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 bg-white border rounded-full hover:bg-gray-200 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 bg-white border rounded-full hover:bg-gray-200 transition-colors"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t p-6 bg-gray-50">
                            <div className="flex justify-between mb-4">
                                <span className="text-lg">Subtotal:</span>
                                <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">
                                Shipping and taxes calculated at checkout
                            </p>
                            <button className="w-full bg-[#4EE0F4] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#3dd0e4] transition-colors shadow-lg">
                                Proceed to Checkout
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full mt-3 text-red-500 hover:text-red-700 transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartDrawer
