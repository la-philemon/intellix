"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cart.store'
import { Product } from '@/types/product'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart)
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      thumbnail: product.thumbnail, 
      quantity: 1 
    });
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <Link href={`/products/${product.id}`}>
      <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group'>
        {/* Image */}
        <div className='relative overflow-hidden'>
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={300} 
            height={300} 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discountPercentage > 0 && (
            <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold'>
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className='p-4'>
          <p className='text-xs text-gray-500 uppercase mb-1'>{product.category}</p>
          <h3 className='font-semibold text-gray-800 mb-2 line-clamp-2 h-12'>{product.title}</h3>
          
          {/* Rating */}
          <div className='flex items-center gap-1 mb-2'>
            <StarIcon className='text-yellow-400 text-sm' />
            <span className='text-sm text-gray-600'>{product.rating.toFixed(1)}</span>
          </div>

          {/* Price */}
          <div className='flex items-center gap-2 mb-3'>
            <span className='text-lg font-bold text-[#4EE0F4]'>${discountedPrice.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <span className='text-sm text-gray-400 line-through'>${product.price.toFixed(2)}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className='w-full bg-[#4EE0F4] text-white py-2 rounded-lg font-semibold hover:bg-[#3dd0e4] transition-colors flex items-center justify-center gap-2'
          >
            <ShoppingCartIcon className='text-sm' /> Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
