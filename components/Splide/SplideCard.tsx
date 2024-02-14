import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

type Params = {
  title: string
  description: string
  thumbnail: string
  technologies: string[]
  link: string
}

const arrowAnimation = {
  initial: { x: 0, scale: 1 },
  animate: { x: 5, scale: 1.1 }
}

const cardAnimation = {
  initial: { scale: 1 },
  animate: { scale: 1.02 }
}

export default function SplideCard({
  title,
  description,
  thumbnail,
  technologies,
  link
}: Params) {
  return (
    <motion.div
      className='relative h-full overflow-hidden rounded-lg bg-cLight shadow-lg transition will-change-transform dark:bg-cDark dark:hover:bg-cDeepDark'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover='animate'
      whileTap={{ scale: 0.95 }}
      variants={cardAnimation}
    >
      <a href={link} target='_blank' rel='noreferrer'>
        <Image
          className='overflow-hidden rounded-t-lg border-b-4 border-primary transition ease-in-out will-change-transform hover:brightness-[1.1]'
          src={thumbnail}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <div className='flex min-h-[140px] w-full flex-col p-4'>
          <h3 className='cursor-pointer text-xl font-bold text-cDark dark:text-cLight'>
            {title}
          </h3>
          <p className='cursor-pointer py-2 pb-[25px] text-sm opacity-90 dark:font-light dark:text-cLight lg:pb-2'>
            {description}
          </p>
          <div className='absolute bottom-3 left-4 flex flex-wrap items-center gap-2 pr-10'>
            {technologies.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <p className='cursor-pointer text-sm font-bold leading-[5px] text-primary md:leading-normal'>
                    {item}
                  </p>
                  {technologies.length - 1 === index ? null : (
                    <div className='h-[15px] w-[1px] bg-primary'></div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
          <motion.div
            variants={arrowAnimation}
            className='absolute bottom-2 right-2'
            transition={{ duration: 0.5 }}
          >
            <svg height='30' viewBox='0 -960 960 960' width='30'>
              <path
                fill='var(--primary-color)'
                d='M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z'
              />
            </svg>
          </motion.div>
        </div>
      </a>
    </motion.div>
  )
}
