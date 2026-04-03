"use client"
import React, { useState } from 'react'
import { Email, Phone, LocationOn, Send } from '@mui/icons-material'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero */}
      <section className='bg-linear-to-r from-[#1e3a5f] to-[#2d5a87] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Contact Us</h1>
          <p className='text-xl text-gray-200'>We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Get in Touch</h2>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-[#4EE0F4] p-3 rounded-full text-white'>
                  <LocationOn />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800'>Address</h3>
                  <p className='text-gray-600'>123 Commerce Street, Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='bg-[#4EE0F4] p-3 rounded-full text-white'>
                  <Phone />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800'>Phone</h3>
                  <p className='text-gray-600'>+255 123 456 789</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='bg-[#4EE0F4] p-3 rounded-full text-white'>
                  <Email />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800'>Email</h3>
                  <p className='text-gray-600'>support@intellix.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-2xl shadow-lg'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Send a Message</h2>
            {submitted && (
              <div className='bg-green-100 text-green-700 p-4 rounded-lg mb-6'>
                Thank you! Your message has been sent.
              </div>
            )}
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold mb-2 text-gray-700'>Name</label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EE0F4] focus:border-transparent'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold mb-2 text-gray-700'>Email</label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EE0F4] focus:border-transparent'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold mb-2 text-gray-700'>Subject</label>
                <input
                  type='text'
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EE0F4] focus:border-transparent'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-semibold mb-2 text-gray-700'>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4EE0F4] focus:border-transparent'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full bg-[#4EE0F4] text-white py-3 rounded-lg font-bold hover:bg-[#3dd0e4] transition-colors flex items-center justify-center gap-2'
              >
                <Send /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
