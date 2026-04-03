"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Home, ShoppingCart, Help } from '@mui/icons-material'

function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/product-list/list?search=${searchQuery.trim()}`
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Error Illustration */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl text-[#4EE0F4]">404</div>
            </div>
            <div className="relative">
              <div className="animate-pulse bg-gray-900 h-96 rounded-2xl"></div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-200 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Search Form */}
          <div className="max-w-md mx-auto mb-12">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-[#4EE0F4]"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
              </div>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Link href="/" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
              <Home className="text-2xl text-[#4EE0F4]" />
              <span className="mt-2 text-sm font-medium">Home</span>
            </Link>
            <Link href="/product-list/list" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
              <ShoppingCart className="text-2xl text-[#4EE0F4]" />
              <span className="mt-2 text-sm font-medium">Shop</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
              <Help className="text-2xl text-[#4EE0F4]" />
              <span className="mt-2 text-sm font-medium">Help</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
              <span className="text-2xl text-[#4EE0F4]">?</span>
              <span className="mt-2 text-sm font-medium">About</span>
            </Link>
          </div>

          {/* CTA */}
          <Link 
            href="/product-list/list"
            className="inline-block bg-[#4EE0F4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3dd0e4] transition-colors shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage