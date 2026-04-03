import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>About Intellix</h1>
          <p className='text-xl text-gray-200'>Your trusted partner for quality products</p>
        </div>
      </section>

      {/* Our Story */}
      <section className='container mx-auto px-4 py-16'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6 text-gray-800'>Our Story</h2>
          <p className='text-gray-600 text-lg mb-6'>
            Founded in 2024, Intellix started with a simple mission: to make quality products 
            accessible to everyone. We believe that shopping should be easy, enjoyable, and affordable.
          </p>
          <p className='text-gray-600 text-lg'>
            Today, we serve thousands of customers across Tanzania and beyond, offering a wide 
            range of products from electronics to fashion, home goods to sports equipment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <h3 className='text-4xl font-bold text-[#4EE0F4] mb-2'>10K+</h3>
              <p className='text-gray-600'>Happy Customers</p>
            </div>
            <div>
              <h3 className='text-4xl font-bold text-[#4EE0F4] mb-2'>500+</h3>
              <p className='text-gray-600'>Products</p>
            </div>
            <div>
              <h3 className='text-4xl font-bold text-[#4EE0F4] mb-2'>50+</h3>
              <p className='text-gray-600'>Categories</p>
            </div>
            <div>
              <h3 className='text-4xl font-bold text-[#4EE0F4] mb-2'>24/7</h3>
              <p className='text-gray-600'>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='container mx-auto px-4 py-16 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Ready to Start Shopping?</h2>
        <Link 
          href='/product-list/list'
          className='inline-block bg-[#4EE0F4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3dd0e4] transition-colors shadow-lg'
        >
          Browse Products
        </Link>
      </section>
    </main>
  )
}
