import { motion } from "framer-motion"

const iconAnimation = {
  initial: { x: 0, scale: 1 },
  animate: { x: -5, scale: 1.1 }
}

type Params = {
  text: string
  icon: string
  handler?: () => void
  type?: "button" | "submit" | "reset" | undefined
  customClass?: string
  testId?: string
}

export default function Button({
  text,
  icon,
  handler,
  type,
  customClass,
  testId
}: Params) {
  return (
    <motion.div
      whileHover='animate'
      whileTap={{ scale: 0.98 }}
      className='inline-block'
    >
      <button
        type={type}
        onClick={handler}
        data-test={testId}
        className={`group group relative flex h-[50px] min-w-[240px] items-center overflow-hidden rounded-full border-2 border-primary text-center text-white drop-shadow-lg transition-all ease-out hover:!bg-primary ${customClass}`}
      >
        <span className='text-md text-cener font-oswald relative w-full font-bold uppercase text-black group-hover:text-cLight dark:text-cLight'>
          {text}
        </span>
        <motion.div
          variants={iconAnimation}
          className='absolute right-0 top-0 flex h-full w-[47px] content-center items-center rounded-full bg-primary text-center'
        >
          <span className='material-symbols-outlined w-full text-2xl transition ease-in-out will-change-transform'>
            {icon}
          </span>
        </motion.div>
      </button>
    </motion.div>
  )
}
