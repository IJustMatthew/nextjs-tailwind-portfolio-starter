import RootLayout from "@/components/Layout/RootLayout"
import PageLoader from "@/components/PageLoader"
import { useDarkMode } from "@/hooks/detect-theme"
import useLocalStorage from "@/hooks/local-storage"
import "@/styles/globals.css"
import { AnimatePresence, motion, Spring } from "framer-motion"
import { appWithTranslation, i18n } from "next-i18next"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { GoogleAnalytics } from "nextjs-google-analytics"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode()
  const router = useRouter()
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}${router.route}`
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10
  }
  const transitionColor = "var(--primary-color)"
  const [loading, setLoading] = useState(false)
  const [locale, setLocale] = useLocalStorage("lang", i18n!.language)

  // Set language when app starts
  useEffect(() => {
    setLocale(i18n!.language)
  }, [])

  // Activate animations when route changes
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)
    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <RootLayout>
      {/* YOUR GA ID COMES HERE */}
      <GoogleAnalytics gaMeasurementId='{YOUR_GA_ID}' trackPageViews />

      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
          {/* Remove AnimatePresence and motion divs to get rid of page animations */}
          {loading ? <PageLoader /> : <Component {...pageProps} key={url} />}
        </motion.div>
      </AnimatePresence>

      <ToastContainer
        position='bottom-right'
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </RootLayout>
  )
}

export default appWithTranslation(MyApp)
