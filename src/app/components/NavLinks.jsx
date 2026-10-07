"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navlinks = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(
                    "https://api.api-store.workers.dev/api/bazardor/categories"
                );

                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.log("Category fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <nav className="border-b bg-white">
                <div className="mx-auto max-w-7xl px-4 py-3">
                    <p className="text-sm text-gray-500">
                        ক্যাটাগরি লোড হচ্ছে...
                    </p>
                </div>
            </nav>
        );
    }

    return (

        <nav className="bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 py-2">

            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                >
                    <span className="text-lg">
                        {category.icon}
                    </span>

                    <span>
                        {category.nameBn}
                    </span>
                </Link>
            ))}

        </div>
    </div>
</nav>
    );
};

export default Navlinks;