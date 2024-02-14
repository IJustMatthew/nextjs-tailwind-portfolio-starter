"use client"

import { useEffect, useState } from "react"

// Custom hook - Check if the current device is a phone
export const useIsMobile = () => {
  const [width, setWidth] = useState(0)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleWindowSizeChange()

    window.addEventListener("resize", handleWindowSizeChange)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  return width <= 700
}
