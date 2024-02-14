import { useTranslation } from "react-i18next"

export default function PageLoader() {
  const { t } = useTranslation()
  return (
    <div className='lef-0 absolute top-0 z-[10] flex h-screen w-full items-center justify-center bg-primary'>
      <p className='text-center text-2xl font-bold text-white'>
        {t("buttons.loading")}
      </p>
    </div>
  )
}
