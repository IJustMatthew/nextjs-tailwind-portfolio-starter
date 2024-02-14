"use client"

import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

export default function BackButton({ routePath }: { routePath: string }) {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className='relative' onClick={() => router.push(routePath)}>
      <button className='group flex cursor-pointer items-center'>
        <span className='material-symbols-outlined w-full text-2xl text-primary transition ease-in-out will-change-transform'>
          arrow_back_ios
        </span>
        <p className='cursor-pointer text-xl font-light group-hover:text-primary group-hover:underline'>
          {t("buttons.back")}
        </p>
      </button>
    </div>
  )
}
