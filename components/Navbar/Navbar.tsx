import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  return (
    <header className='navbar'>
      <div className='container'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                className='mr-10 inline-block cursor-pointer overflow-hidden transition-all ease-in-out will-change-transform hover:brightness-[1.2]'
                src='/img/logo-inverted.svg'
                alt='logo'
                width={45}
                height={45}
              />
            </Link>
          </div>

          <div className='flex items-center gap-4 md:gap-6'>
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
