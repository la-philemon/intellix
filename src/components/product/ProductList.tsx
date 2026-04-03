"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types/product'
import { productService } from '@/services/services'

interface FilterState {
    category: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
}

function ProductList({ filters }: { filters?: FilterState }) {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true)
                let data: Product[] = [];

                if (filters?.category && filters.category !== 'all') {
                    const result = await productService.getByCategory(filters.category);
                    data = result.products;
                } else {
                    const result = await productService.getAll(30);
                    data = result.products;
                }

                // Apply price filter
                if (filters) {
                    data = data.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
                }

                // Apply sorting
                if (filters?.sortBy) {
                    switch (filters.sortBy) {
                        case 'price-asc':
                            data.sort((a, b) => a.price - b.price);
                            break;
                        case 'price-desc':
                            data.sort((a, b) => b.price - a.price);
                            break;
                        case 'rating':
                            data.sort((a, b) => b.rating - a.rating);
                            break;
                        case 'name':
                            data.sort((a, b) => a.title.localeCompare(b.title));
                            break;
                    }
                }

                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [filters]);

    if (!loading && products.length === 0) {
        return <p className="text-center text-gray-500 py-12">No products found</p>;
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {loading ? (
                [...Array(20)].map((_, i) => (
                    <div key={i} className='animate-pulse bg-gray-200 h-64 rounded-2xl'></div>
                ))
            ) : (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    )
}

export default ProductList
