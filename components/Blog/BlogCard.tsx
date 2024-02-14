import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"

type Params = {
  title: string
  description: string
  thumbnail: string
  link: string
  hasButton: boolean
  linkType?: string
  t?: any
}

const arrowAnimation = {
  initial: { x: 0, scale: 1 },
  animate: { x: 5, scale: 1.1 }
}

const cardAnimation = {
  initial: { scale: 1 },
  animate: { scale: 1.02 }
}

const renderButtonType = (hasButton: boolean, t: any) => {
  if (hasButton) {
    return (
      <button className='font-bebas absolute bottom-4 left-0 right-0 m-[auto] w-[90%] rounded-full bg-primary p-1 text-center text-xl uppercase tracking-wider text-cLight transition-all ease-in-out will-change-auto'>
        {t("buttons.clickMe")}
      </button>
    )
  } else {
    return (
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
    )
  }
}

const renderCardType = ({
  title,
  description,
  thumbnail,
  link,
  hasButton,
  linkType,
  t
}: Params) => {
  if (linkType === "outer") {
    return (
      <a href={link} target='_blank' rel='noreferrer'>
        <Image
          className='overflow-hidden rounded-t-lg border-b-4 border-primary transition ease-in-out will-change-transform hover:brightness-[1.1]'
          src={thumbnail}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "auto" }}
        />
        <div className='flex min-h-[140px] w-full flex-col p-4'>
          <h3 className='text-CLightGrey cursor-pointer text-xl font-bold dark:text-cLight'>
            {title}
          </h3>
          <p className='cursor-pointer py-2 text-sm text-cLightGrey opacity-90 dark:font-light dark:text-cOffWhite'>
            {description}
          </p>
          {renderButtonType(hasButton, t)}
        </div>
      </a>
    )
  } else {
    return (
      <Link href={link}>
        <Image
          className='overflow-hidden rounded-t-lg border-b-4 border-primary transition ease-in-out will-change-transform hover:brightness-[1.1]'
          src={thumbnail}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "auto" }}
        />
        <div className='flex min-h-[140px] w-full flex-col p-4'>
          <h3 className='cursor-pointer text-xl font-bold text-cDark dark:text-cLight'>
            {title}
          </h3>
          <p className='cursor-pointer py-2 text-sm text-cDark opacity-90 dark:font-light dark:text-cOffWhite'>
            {description}
          </p>
          {renderButtonType(hasButton, t)}
        </div>
      </Link>
    )
  }
}

export default function BlogCard({
  title,
  description,
  thumbnail,
  link,
  hasButton,
  linkType
}: Params) {
  // Passing down t as a prop to avoid using useTranslation in the component
  const { t } = useTranslation()
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-white shadow-lg transition will-change-transform dark:bg-cDark dark:hover:bg-cDeepDark ${
        hasButton ? "pb-8" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover='animate'
      whileTap={{ scale: 0.95 }}
      variants={cardAnimation}
    >
      {renderCardType({
        title,
        description,
        thumbnail,
        link,
        hasButton,
        linkType,
        t
      })}
    </motion.div>
  )
}
