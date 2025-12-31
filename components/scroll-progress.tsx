"use client"

import { useState, useEffect } from 'react'

export function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY
            const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
            setProgress(progress)
        }

        window.addEventListener('scroll', updateProgress)
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200 dark:bg-gray-800">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
