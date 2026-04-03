import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    onClick?: () => void
    disabled?: boolean
    className?: string
}

function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    className = ''
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center'

    const variants = {
        primary: 'bg-[#4EE0F4] text-white hover:bg-[#3dd0e4] shadow-lg hover:shadow-xl',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
