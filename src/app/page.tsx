"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { Product, Category } from '@/types/product'
import { productService } from '@/services/services'
import Link from 'next/link'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await productService.getRandomProduct(10);
        setFeaturedProducts(products);

        const cats = await productService.getCategories();
        setCategories(cats.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Intellix</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Discover amazing products at great prices</p>
          <Link 
            href="/product-list/list"
            className="inline-block bg-[#4EE0F4] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-[#3dd0e4] transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-xl"></div>
            ))
          ) : (
            categories.map((cat, index) => (
                <Link 
                  key={`category-${index}`} 
                  href={`/product-list/list?category=${cat.slug}`}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <p className="font-semibold text-gray-800 capitalize">{cat.name}</p>
                </Link>
            ))
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link href="/product-list/list" className="text-[#4EE0F4] hover:underline font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {loading ? (
            [...Array(10)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-2xl"></div>
            ))
          ) : (
            featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      <section className="bg-linear-to-r from-[#4EE0F4] to-[#2DD4BF] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8">Join thousands of happy customers today!</p>
          <Link 
            href="/product-list/list"
            className="inline-block bg-white text-[#4EE0F4] py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
}