import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='flex min-h-[100px] w-full items-center justify-center border-primary p-4 shadow-[0px_-1px_9px_0px_rgba(0,0,0,0.2)] dark:border-t-2 dark:shadow-[0px_-1px_9px_0px_rgba(0,0,0,0.8)]'>
      <div className='w-100 container flex flex-col items-center space-y-2'>
        <Link href='/'>
          <Image
            className='inline-block cursor-pointer overflow-hidden transition-all ease-in-out will-change-transform hover:brightness-[1.2]'
            src='/img/logo.svg'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>

        <Link href='/privacy'>
          <p className='mt-2 cursor-pointer text-center text-sm text-primary hover:underline'>
            {t("privacy")}
          </p>
        </Link>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/IJustMatthew/nextjs-tailwind-portfolio-starter'
          className='flex items-center gap-2 font-bold'
        >
          <Image
            className='inline-block cursor-pointer overflow-hidden transition-all ease-in-out will-change-transform hover:brightness-[1.2] dark:hidden'
            src='/img/github.svg'
            alt='github'
            width={30}
            height={30}
          />
          <Image
            className='hidden cursor-pointer overflow-hidden transition-all ease-in-out will-change-transform hover:brightness-[1.2] dark:inline-block'
            src='/img/github-inverted.svg'
            alt='github'
            width={30}
            height={30}
          />
          Github project
        </a>

        <p className='mt-2 text-center text-sm text-cDark dark:text-cLight'>
          &copy; {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  )
}
