"use client"
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material'

function Footer() {
    return (
        <footer className='bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white'>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>🛒 Intellix</h3>
                        <p className='text-gray-300 mb-4'>
                            Your one-stop shop for quality products at great prices.
                            We deliver excellence with every order.
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'
                                className='bg-white/10 p-2 rounded-full hover:bg-[#4EE0F4] transition-colors'>
                                <Facebook />
                            </a>
                            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'
                                className='bg-white/10 p-2 rounded-full hover:bg-[#4EE0F4] transition-colors'>
                                <Twitter />
                            </a>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                                className='bg-white/10 p-2 rounded-full hover:bg-[#4EE0F4] transition-colors'>
                                <Instagram />
                            </a>
                            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                                className='bg-white/10 p-2 rounded-full hover:bg-[#4EE0F4] transition-colors'>
                                <LinkedIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li><Link href='/' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Home</Link></li>
                            <li><Link href='/product-list/list' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Products</Link></li>
                            <li><Link href='/about' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>About Us</Link></li>
                            <li><Link href='/contact' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Customer Service</h3>
                        <ul className='space-y-2'>
                            <li><a href='#' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>FAQ</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Shipping Info</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Returns</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-[#4EE0F4] transition-colors'>Track Order</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2 text-gray-300'>
                                <LocationOn /> 123 Commerce St, Dar es Salaam
                            </li>
                            <li className='flex items-center gap-2 text-gray-300'>
                                <Phone /> +255 123 456 789
                            </li>
                            <li className='flex items-center gap-2 text-gray-300'>
                                <Email /> support@intellix.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-white/20 mt-8 pt-8 text-center text-gray-300'>
                    <p>© 2024 Intellix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
