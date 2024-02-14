import ToTopButton from "@/components/Button/ToTopButton"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics as VercelAnalytics } from "@/components/VercelAnalytics"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function RootLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        <Navbar />
        <main>
          {children}
          <ToTopButton />
        </main>
        <Footer />
        <VercelAnalytics />
      </ThemeProvider>
    </div>
  )
}

export default RootLayout
