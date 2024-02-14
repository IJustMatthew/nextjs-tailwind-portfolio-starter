import {
  bgTextAnimation,
  mainText1Animation,
  mainText2Animation,
  sectionTitleAnimation
} from "@/constants/animations"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Params = {
  title: string
  subTitle1: string
  subTitle2: string
}

export default function SectionTitle({ title, subTitle1, subTitle2 }: Params) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      variants={sectionTitleAnimation}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='relative flex w-full items-center justify-center text-center'
    >
      <motion.h2
        variants={bgTextAnimation}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='z-5 absolute left-0 right-0 text-5xl font-black uppercase text-cLight drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] dark:text-cDark dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] md:text-7xl'
      >
        {title}
      </motion.h2>
      <motion.div className='z-10 flex w-full items-center justify-center gap-2 text-center'>
        <motion.p
          variants={mainText1Animation}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-light text-2xl font-black uppercase md:text-3xl'
        >
          {subTitle1}
        </motion.p>
        <motion.p
          variants={mainText2Animation}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-2xl font-black uppercase text-primary md:text-3xl'
        >
          {subTitle2}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
