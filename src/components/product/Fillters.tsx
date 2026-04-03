"use client";

import React, { useState, useEffect } from "react";

interface FilterState {
    category: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
}

export default function Filters({
    onFilterChange,
}: {
    onFilterChange: (filters: FilterState) => void;
}) {
    const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
    const [filters, setFilters] = useState<FilterState>({
        category: "all",
        minPrice: 0,
        maxPrice: 10000,
        sortBy: "default",
    });

    // Fetch categories from DummyJSON on mount
    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch('https://dummyjson.com/products/categories');
                const data = await res.json();
                
                // DummyJSON returns array of objects with slug and name
                const categoryOptions = [
                    { value: "all", label: "All Categories" },
                    ...data.map((cat: { slug: string; name: string }) => ({
                        value: cat.slug,
                        label: cat.name
                    }))
                ];
                setCategories(categoryOptions);
            } catch (error) {
                console.error("Error fetching categories:", error);
                // Fallback categories
                setCategories([
                    { value: "all", label: "All Categories" },
                    { value: "smartphones", label: "Smartphones" },
                    { value: "laptops", label: "Laptops" },
                    { value: "fragrances", label: "Fragrances" },
                    { value: "skincare", label: "Skincare" },
                    { value: "groceries", label: "Groceries" },
                    { value: "home-decoration", label: "Home Decoration" },
                    { value: "furniture", label: "Furniture" },
                    { value: "tops", label: "Tops" },
                    { value: "womens-dresses", label: "Women's Dresses" },
                    { value: "mens-shirts", label: "Men's Shirts" },
                ]);
            }
        }
        fetchCategories();
    }, []);

    const handleChange = (key: keyof FilterState, value: string | number) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg sticky top-16">
            <h3 className="text-xl font-bold mb-6 text-gray-800">🔍 Filters</h3>

            {/* Category */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Category
                </label>
                <select
                    value={filters.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#4EE0F4] focus:border-transparent"
                >
                    {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Price Range
                </label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => handleChange("minPrice", parseFloat(e.target.value) || 0)}
                        className="w-1/2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#4EE0F4]"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) => handleChange("maxPrice", parseFloat(e.target.value) || 10000)}
                        className="w-1/2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#4EE0F4]"
                    />
                </div>
            </div>

            {/* Sort By */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Sort By
                </label>
                <select
                    value={filters.sortBy}
                    onChange={(e) => handleChange("sortBy", e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#4EE0F4]"
                >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                    <option value="name">Name A-Z</option>
                </select>
            </div>

            {/* Reset */}
            <button
                onClick={() => {
                    const defaultFilters = {
                        category: "all",
                        minPrice: 0,
                        maxPrice: 10000,
                        sortBy: "default",
                    };
                    setFilters(defaultFilters);
                    onFilterChange(defaultFilters);
                }}
                className="w-full py-3 border-2 border-[#4EE0F4] text-[#4EE0F4] rounded-lg font-semibold hover:bg-[#4EE0F4] hover:text-white transition-colors"
            >
                Reset Filters
            </button>
        </div>
    );
}
