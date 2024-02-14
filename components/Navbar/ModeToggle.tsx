"use client"
import { useTranslation } from "next-i18next"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { t } = useTranslation()
  const { setTheme, theme } = useTheme()

  return (
    <button
      data-test='dark-mode-toggle'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className='group flex h-10 w-10 items-center justify-center rounded-md border transition will-change-auto hover:bg-slate-50'
      aria-label={t("ariaLabels.changeTheme")}
    >
      <div
        className='flex content-center items-center justify-center rounded-lg p-2 shadow transition ease-in-out will-change-transform dark:hidden'
        title={t("ariaLabels.darkMode")}
      >
        <span className='material-symbols-outlined text-1xl w-full text-cLight transition ease-in-out will-change-transform group-hover:text-primary'>
          dark_mode
        </span>
      </div>

      <div
        className='hidden content-center items-center justify-center rounded-lg p-2 shadow transition ease-in-out will-change-transform group-hover:text-primary dark:flex'
        title={t("ariaLabels.lightMode")}
      >
        <span className='material-symbols-outlined text-1xl w-full transition ease-in-out will-change-transform'>
          light_mode
        </span>
      </div>
    </button>
  )
}
