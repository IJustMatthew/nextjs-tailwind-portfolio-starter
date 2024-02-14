import Button from "@/components/Button/Button"
import { fadeIn } from "@/constants/animations"
import ScrollToSection from "@/hooks/scroll-to-section"
import { motion, useInView } from "framer-motion"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import { useRef } from "react"

export default function Hero() {
  const { t } = useTranslation()
  const heroRef = useRef(null)
  const heroInViewIsInView = useInView(heroRef, { once: true })

  return (
    <motion.section
      ref={heroRef}
      variants={fadeIn}
      initial='hidden'
      animate={heroInViewIsInView ? "visible" : "hidden"}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className='flex min-h-[100vh] items-center justify-center border-b-4 border-primary py-[80px] dark:bg-gradient-to-r dark:from-cDeepDark dark:to-cDark'
    >
      <div className='container grid grid-cols-3 items-center justify-center gap-[60px]'>
        <div className='col-span-3 flex justify-center md:col-span-1 md:justify-start'>
          <Image alt='logo' src='/img/logo.svg' height={500} width={400} />
        </div>
        <div className='w-100 col-span-3 flex flex-col items-center md:col-span-2 md:items-start'>
          <div className='flex w-full flex-col gap-4 text-center md:text-left'>
            <h1
              data-test='hero-title'
              className='mt-[-18px] text-3xl font-black uppercase text-primary md:text-4xl'
            >
              {t("hero.title")}
            </h1>
            <h2 className='text-xl font-black uppercase text-cDark dark:text-cLight md:text-2xl'>
              {t("hero.subTitle")}
            </h2>
          </div>

          <p className='my-5 py-2 text-center text-lg text-cDark opacity-90 dark:font-light dark:text-cOffWhite md:text-left'>
            {t("hero.description")}
          </p>
          <div className='inline-block'>
            <ScrollToSection href='components'>
              <Button
                text={t("hero.button")}
                icon='keyboard_double_arrow_right'
              />
            </ScrollToSection>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
