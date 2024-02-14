import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

export default function CardPlaceholder() {
  const { t } = useTranslation()
  return (
    <motion.div
      className={`relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-primary shadow-lg transition will-change-transform`}
    >
      <p className='text-center text-2xl font-black uppercase text-primary'>
        {t("cardPlaceholder")}
      </p>
    </motion.div>
  )
}
