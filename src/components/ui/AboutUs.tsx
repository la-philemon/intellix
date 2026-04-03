"use client"   
import React, { useState } from 'react'


function AboutUs() {

const [ error, setError ] = useState({ name: "", message: "" , email: ""  })
const [ formatData, setFormatData ] = useState({ name: "", message: "" , email: ""  })

const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormatData((prev) => ({ ...prev, [name]: value }))
};

const validateForm = () => {
    const formErrors = { name: "", message: "" , email: ""  }
    let isValid = true;
    
    if (!formatData.name.trim()) {
        formErrors.name = "Name is required";
        isValid = false;
    }
    if (!formatData.email.trim()) {
        formErrors.email = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formatData.email)) {
        formErrors.email = "Email is invalid";
        isValid = false;
    }
    if (!formatData.message.trim()) {
        formErrors.message = "Message is required";
        isValid = false;
    }else if (formatData.message.trim().length < 10) {
        formErrors.message = "Message must be at least 10 characters";
        isValid = false;
    }
    setError(formErrors);
    return isValid;
};

const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
        // Form is valid, you can submit the data to the server or perform any other actions here
        console.log("Form submitted successfully:", formatData);
        // Reset form data and errors after successful submission
        setFormatData({ name: "", message: "" , email: ""  });
        setError({ name: "", message: "" , email: ""  });
    } else {
        console.log("Form validation failed:", error);
    }
};

return (

    <div className='bg-[#E7F0FF] flex flex-col min-h-screen p-8'>
        <h1 className='font-bold text-2xl text-center mb-4'>Contact Us </h1>
        <p className='text-center text-gray-700 text-lg'>We are a team of passionate individuals dedicated to providing the best services to our customers. 
            Our mission is to create innovative solutions that make a positive impact on people&apos;s lives. 
            We value integrity, collaboration, and excellence in everything we do. If you have any questions or 
            would like to learn more about our company, please don&apos;t hesitate to reach out to us. We look forward to hearing from you!
            </p>
        <form onSubmit={handleSubmitForm} className='w-full max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md'>
            <div className='mb-4'>
                <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formatData.name}             
                    onChange={handleSubmit}
                    className={`w-full px-3 py-2 border ${error.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {error.name && <p className='text-red-500 text-sm mt-1'>{error.name}</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formatData.email}             
                    onChange={handleSubmit}
                    className={`w-full px-3 py-2 border ${error.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {error.email && <p className='text-red-500 text-sm mt-1'>{error.email}</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor="message" className='block text-gray-700 font-bold mb-2'>Message</label>
                <textarea
                    id="message" 
                    name="message"      
                    value={formatData.message}  
                    onChange={handleSubmit}
                    className={`w-full px-3 py-2 border ${error.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    rows={4}
                />
                {error.message && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
            </div>
            <button type="submit" className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>Submit</button>
        </form> 
    </div>
  )
}

export default AboutUs