"use client"
import { Variants, motion } from "framer-motion"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const iconAnimation: Variants = {
  initial: { y: 0, scale: 1 },
  animate: { y: -5, scale: 1.1 }
}

export default function ToTopButton() {
  const router = useRouter()
  const { t } = useTranslation()
  const isBrowser = () => typeof window !== "undefined"
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (!isBrowser) return

    const position = window.pageYOffset
    // Use position & documentHeight to calculate when to show the button
    // const documentHeight = document.body.scrollHeight
    if (position > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsVisible(false)
  }, [router.asPath])

  function scrollToTop() {
    if (!isBrowser() || !isVisible) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      id='toTopButton'
      whileHover='animate'
      whileTap={{ scale: 0.98 }}
      variants={iconAnimation}
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 flex h-[47px] w-[47px] content-center items-center rounded-full bg-primary text-center transition-opacity ${
        isVisible ? "cursor-pointer opacity-100" : "cursor-default opacity-0"
      }`}
      aria-label={t("ariaLabels.backToTop")}
      title={t("ariaLabels.backToTop")}
    >
      <span className='material-symbols-outlined w-full text-2xl text-cLight transition ease-in-out will-change-transform'>
        vertical_align_top
      </span>
    </motion.button>
  )
}
