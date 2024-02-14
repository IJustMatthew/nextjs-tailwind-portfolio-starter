"use client"

import { useEffect, useState } from "react"

// Custom hook - Check if tailwind's dark mode is activated
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"))

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    mutationObserver.observe(document.documentElement, { attributes: true })

    return () => {
      mutationObserver.disconnect()
    }
  }, [])
  return isDarkMode
}
