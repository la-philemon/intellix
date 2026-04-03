import React from 'react'

interface ProductPageProps {
  params: Promise<{ id?: string[] }>
}

async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const id = resolvedParams.id?.[0]

  if (!id) {
    return (
      <div>
        <h1>Product List</h1>
        <p>Browse our products above</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product with ID: {id}</p>
    </div>
  )
}

export default ProductDetailPage