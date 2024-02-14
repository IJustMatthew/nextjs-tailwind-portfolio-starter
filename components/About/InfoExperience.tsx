import {
  experienceContentAnimation,
  experienceDateAnimation,
  experienceIconAnimation,
  experienceItemAnimation
} from "@/constants/animations"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Params = {
  icon: string
  date: string
  title: string
  subTitle: string
  description: string
}

export default function InfoExperience({
  icon,
  date,
  title,
  subTitle,
  description
}: Params) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      variants={experienceItemAnimation}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='relative flex gap-3'
    >
      <motion.div
        variants={experienceIconAnimation}
        className='relative flex flex-col content-center items-center justify-center'
      >
        <div className='flex h-[35px] w-[35px] cursor-default items-center rounded-full bg-primary text-center'>
          <span className='material-symbols-outlined w-full text-2xl text-cLight transition ease-in-out will-change-transform'>
            {icon}
          </span>
        </div>
        <div className='h-full w-[1px] bg-cLightGrey'></div>
      </motion.div>

      <div>
        <motion.p
          variants={experienceDateAnimation}
          className='min-content my-1 inline-block rounded-lg py-1 text-sm dark:px-2'
        >
          {date}
        </motion.p>
        <motion.p
          variants={experienceContentAnimation}
          className='text-xl font-bold uppercase text-cDark dark:text-cLight'
        >
          {title}{" "}
          {subTitle ? (
            <span className='pt-2 text-base text-cDark opacity-90 dark:font-light dark:text-cOffWhite'>
              - {subTitle}
            </span>
          ) : null}
        </motion.p>
        <motion.p
          variants={experienceContentAnimation}
          className='pt-1 text-cDark dark:font-light dark:text-cLightGrey'
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}
