"use client"

import { useState, useEffect } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Sunita Reddy",
        role: "Homeowner, Bangalore",
        initials: "SR",
        content: "NEXGEN built our dream home with exceptional attention to detail. The team was professional, transparent, and delivered on time. We couldn't be happier with the result.",
        rating: 5
    },
    {
        id: 2,
        name: "Vikram Malhotra",
        role: "CEO, TechStart Innovations",
        initials: "VM",
        content: "Our commercial complex was completed ahead of schedule. NEXGEN's expertise in commercial construction is unmatched. Highly recommend for any large-scale projects.",
        rating: 5
    },
    {
        id: 3,
        name: "Ananya Krishnan",
        role: "Real Estate Investor",
        initials: "AK",
        content: "I've worked with many builders, but NEXGEN stands out for their integrity and quality. They've handled three of my development projects flawlessly.",
        rating: 5
    },
    {
        id: 4,
        name: "Ramesh Gupta",
        role: "Director, Flavours Restaurant Chain",
        initials: "RG",
        content: "The interior design team at NEXGEN transformed our restaurant into a stunning space. Our customers constantly compliment the ambiance.",
        rating: 5
    }
]

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 tracking-tight">
                        Client experiences
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Testimonial Card */}
                    <div
                        className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100 dark:border-gray-700"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        {/* Quote mark */}
                        <div className="absolute top-8 left-10 text-6xl text-gray-200 dark:text-gray-700 font-serif leading-none">
                            &ldquo;
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10 min-h-[120px]">
                                {testimonials[activeIndex].content}
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                                        <span className="text-white dark:text-gray-900 font-semibold">
                                            {testimonials[activeIndex].initials}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonials[activeIndex].name}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="hidden sm:flex gap-1">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${index === activeIndex
                                        ? 'w-8 h-2 bg-gray-900 dark:bg-white'
                                        : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
