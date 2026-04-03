"use client"
import React, { Component } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface Props {
  children: React.ReactNode
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We&apos;re experiencing technical difficulties. Please try again later.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#4EE0F4] text-white px-6 py-3 rounded-lg hover:bg-[#3dd0e4] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary