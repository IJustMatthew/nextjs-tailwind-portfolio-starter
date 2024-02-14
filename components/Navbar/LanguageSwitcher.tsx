import useLocalStorage from "@/hooks/local-storage"
import { Listbox, Transition } from "@headlessui/react"
import { i18n, useTranslation } from "next-i18next"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, query } = router
  const { t } = useTranslation()

  const languages = [
    { name: t("languages.en"), value: "en" },
    { name: t("languages.de"), value: "de" }
  ]
  const [selected, setSelected] = useState(languages[0])
  const [storageLocale, setStorageLocale] = useLocalStorage(
    "lang",
    i18n!.language
  )

  useEffect(() => {
    setSelected({
      name: storageLocale.toUpperCase(),
      value: storageLocale
    })
  }, [storageLocale])

  function handleLanguageChange(e: any) {
    setSelected({ name: e.value.toUpperCase(), value: e.value })
    setStorageLocale(e.value)

    if (pathname.includes("posts")) {
      router.push("/", "", { locale: e.value })
    } else {
      router.push({ pathname, query }, "", { locale: e.value })
    }
  }

  return (
    <div className='ml-5 h-[48px]'>
      <Listbox
        value={selected}
        onChange={(e) => handleLanguageChange(e)}
        data-test='language-change'
        aria-label={t("ariaLabels.changeLanguage")}
      >
        <div className='relative mt-1'>
          <Listbox.Button className='relative flex h-[40px] w-[105px] cursor-pointer items-center gap-2 rounded-lg bg-white py-2 pl-3 pr-6 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm'>
            <Image
              alt=''
              src={`/img/flags/${selected.value.toLowerCase()}-flag.svg`}
              height={10}
              width={30}
            />
            <span className='block truncate text-cDark'>{selected.name}</span>
            <span className='material-symbols-outlined pointer-events-none absolute right-0 flex items-center justify-center pr-1 text-cDark'>
              keyboard_arrow_down
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'
              id='language-switcher'
            >
              {languages.map((lang, landIndex) => (
                <Listbox.Option
                  key={landIndex}
                  className={`hover:bg-smOffWhite relative flex cursor-pointer select-none items-center gap-2 py-2 pl-2 pr-4 transition-all ${
                    selected.value === lang.value
                      ? "!bg-primary !text-cLight"
                      : "text-cDark"
                  }`}
                  value={lang}
                >
                  <>
                    <Image
                      alt=''
                      src={`/img/flags/${lang.value.toLowerCase()}-flag.svg`}
                      className='[clip-path:polygon(84.2% 17.3%, 100% 0%, 100% 100%, 75% 100%, 0% 100%, 0% 60%, 0.3% 16.3%)]'
                      height={10}
                      width={30}
                    />
                    <p className='cursor-pointer font-medium'>{lang.name}</p>
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
