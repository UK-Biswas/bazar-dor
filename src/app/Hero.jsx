import { Button } from '@heroui/react';
import React from 'react';
import Image from 'next/image';

const Hero = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: 'full'
    })
    console.log(date);

    return (
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-10 sm:px-6 md:py-14 lg:flex-row lg:px-8">

    {/* Content */}
    <div className="w-full text-center lg:w-1/2 lg:text-left">

        {/* Date */}
        <p className="mb-4 inline-block rounded-lg bg-green-700/10 px-3 py-1 text-xs font-medium text-green-700 sm:text-sm">
            {date}
        </p>

        {/* Heading */}
        <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* Button */}
        <Button
            size="sm"
            className="mt-6 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
        >
            সব পণ্য দেখুন
        </Button>

    </div>

    {/* Image */}
    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
        <Image
            src="/assets/bazar-hero.png"
            alt="বাজার দর"
            width={500}
            height={500}
            priority
            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[400px] lg:max-w-[500px]"
        />
    </div>

</div>
    );
};

export default Hero;