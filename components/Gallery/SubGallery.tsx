import Gallery from "@/components/Gallery/Gallery"
import { gallery1, gallery2 } from "@/content/mocks/mocks"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"
import { useState } from "react"

export default function SubGalleryChooser() {
  const { t } = useTranslation()
  const [active, setActive] = useState("gallery1")

  function handleReferenceSourceChange(type: string) {
    setActive(type)
  }

  function setActiveReferenceContent() {
    let activeReferenceContent = null
    switch (active) {
      case "gallery1":
        activeReferenceContent = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gallery photos={gallery1} />
          </motion.div>
        )
        break
      case "gallery2":
        activeReferenceContent = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gallery photos={gallery2} />
          </motion.div>
        )
        break
      default:
        activeReferenceContent = (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gallery photos={gallery1} />
          </motion.div>
        )
    }

    return activeReferenceContent
  }

  return (
    <>
      <div className='mb-4 flex w-full flex-wrap items-center justify-center gap-2 rounded-xl text-center'>
        <button
          onClick={() => handleReferenceSourceChange("gallery1")}
          className={`hover: rounded-lg p-2 font-medium text-cDark transition ease-in-out dark:text-cLight dark:hover:bg-cDeepDark ${
            active === "gallery1" ? "!font-bold !text-primary" : ""
          }`}
        >
          {t("gallery.gallery1")}
        </button>

        <div className='h-[20px] w-[1px] bg-primary'></div>

        <button
          onClick={() => handleReferenceSourceChange("gallery2")}
          className={`hover: rounded-lg p-2 font-medium text-cDark transition ease-in-out dark:text-cLight dark:hover:bg-cDeepDark ${
            active === "gallery2" ? "!font-bold !text-primary" : ""
          }`}
        >
          {t("gallery.gallery2")}
        </button>
      </div>

      <div>{setActiveReferenceContent()}</div>
    </>
  )
}
