"use client"

import { createContext, useContext, useEffect, useState } from 'react'

// Define the possible theme values
type Theme = 'dark' | 'light' | 'system'

// Define what our context will provide
type ThemeProviderContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Create the context
const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

// The provider component that wraps your app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    // Get saved theme from localStorage when component mounts
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document and save to localStorage
    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      // Use user's chosen theme
      root.classList.add(theme)
    }

    // Save theme preference to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
