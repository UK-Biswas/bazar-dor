"use client";

import React, { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";

const API_URL =
    "https://api.abcz.workers.dev/api/bazardor/products";

const Marquee = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
                }

                const data = await response.json();

                const productList = Array.isArray(data)
                    ? data
                    : data.products || data.data || [];

                setProducts(productList);
            } catch (err) {
                setError(err.message || "তথ্য লোড করতে সমস্যা হয়েছে");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="border-y border-green-100 bg-green-50 px-4 py-3 text-sm text-gray-600">
                বাজারদরের তথ্য লোড হচ্ছে...
            </div>
        );
    }

    if (error) {
        return (
            <div className="border-y border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="border-y border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
                বর্তমানে কোনো পণ্যের তথ্য পাওয়া যায়নি।
            </div>
        );
    }

    return (
        <section className="overflow-hidden border-y border-green-100 bg-green-50">

            <div className="flex min-h-12 items-center0">

                {/* Title */}
                <div className="z-10 flex shrink-0 items-center gap-2 bg-green-700 px-3 py-3 text-xs font-bold text-white sm:px-4 sm:text-sm">
                    <span>📢</span>
                    <span>আজকের বাজারদর</span>
                </div>

                {/* Marquee */}
                <div className="min-w-0 flex-1 overflow-hidden py-2">

                    <MarqueeText
                        direction="right"
                        duration={10}
                        pauseOnHover={true}
                        textSpacing="2rem"
                    >
                        {products.map((product) => {

                            const isUp = product.change?.dir === "up";
                            const isDown = product.change?.dir === "down";
                            const isFlat = product.change?.dir === "flat";

                            return (
                                <span
                                    key={product.id}
                                    className="mx-4 inline-flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm"
                                >

                                    {/* Category Icon */}
                                    <span className="text-base sm:text-lg">
                                        {product.categoryIcon || product.image || "🛒"}
                                    </span>

                                    {/* Product Name */}
                                    <span className="font-semibold text-gray-800">
                                        {product.nameBn}
                                    </span>

                                    {/* Price */}
                                    <span className="font-bold text-green-700">
                                        {product.today} টাকা/কেজি
                                    </span>

                                    {/* Change */}
                                    <span
                                        className={
                                            isUp
                                                ? "font-semibold text-green-600"
                                                : isDown
                                                    ? "font-semibold text-red-500"
                                                    : "font-semibold text-gray-500"
                                        }
                                    >
                                        {isUp && "▲"}
                                        {isDown && "▼"}
                                        {isFlat && "●"}{" "}
                                        {Math.abs(product.change?.pct || 0)}%
                                    </span>

                                </span>
                            );
                        })}
                    </MarqueeText>

                </div>
            </div>
        </section>
    );
};

export default Marquee;