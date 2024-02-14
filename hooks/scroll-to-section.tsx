"use client"

import Link, { LinkProps } from "next/link"
import { MouseEvent, PropsWithChildren } from "react"

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren

const ScrollToSection = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const hrefString = e.currentTarget.href
    const targetId = hrefString.substring(
      hrefString.lastIndexOf("/") + 1,
      hrefString.length
    )
    const elem = document.getElementById(targetId)

    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth"
    })
  }
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}
export default ScrollToSection
