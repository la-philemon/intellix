"use client"
import React, { useState } from 'react'
import ProductList from '@/components/product/ProductList'
import Filters from '@/components/product/Fillters'

interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
}

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    minPrice: 0,
    maxPrice: 10000,
    sortBy: "default",
  });

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero */}
      <section className='bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold mb-2'>All Products</h1>
          <p className='text-gray-200'>Discover our amazing collection</p>
        </div>
      </section>

      <section className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filters Sidebar */}
          <aside className='lg:w-64 flex'>
            <Filters onFilterChange={setFilters} />
          </aside>

          {/* Products Grid */}
          <div className='flex-1'>
            <ProductList filters={filters} />
          </div>
        </div>
      </section>
    </main>
  )
}
