"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { routes } from '@/routes/routes'
import { useCartStore } from '@/store/cart.store'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className='bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link href={routes.home} className='text-2xl font-bold text-white hover:text-[#4EE0F4] transition-colors'>
            🛒 Intellix
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <Link href={routes.home} className='flex items-center gap-2 text-white hover:text-[#4EE0F4] transition-colors font-medium'>
              <HomeIcon /> Home
            </Link>
            <Link href={routes.products} className='flex items-center gap-2 text-white hover:text-[#4EE0F4] transition-colors font-medium'>
              <StoreIcon /> Products
            </Link>
            <Link href={routes.about} className='flex items-center gap-2 text-white hover:text-[#4EE0F4] transition-colors font-medium'>
              <InfoIcon /> About
            </Link>
            <Link href={routes.contact} className='flex items-center gap-2 text-white hover:text-[#4EE0F4] transition-colors font-medium'>
              <ContactMailIcon /> Contact
            </Link>
            
            {/* Cart Icon with Badge */}
            <Link href="/cart" className='relative text-white hover:text-[#4EE0F4] transition-colors'>
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4'>
            <div className='flex flex-col gap-4'>
              <Link href={routes.home} className='text-white hover:text-[#4EE0F4] transition-colors font-medium'>
                Home
              </Link>
              <Link href={routes.products} className='text-white hover:text-[#4EE0F4] transition-colors font-medium'>
                Products
              </Link>
              <Link href={routes.about} className='text-white hover:text-[#4EE0F4] transition-colors font-medium'>
                About
              </Link>
              <Link href={routes.contact} className='text-white hover:text-[#4EE0F4] transition-colors font-medium'>
                Contact
              </Link>
              <Link href="/cart" className='text-white hover:text-[#4EE0F4] transition-colors font-medium'>
                Cart ({cartCount})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
