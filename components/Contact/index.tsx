import { ContactForm } from "@/components/Contact/ContactForm"
import { useTranslation } from "next-i18next"

export function Contact() {
  const { t } = useTranslation()
  return (
    <section className='flex items-center justify-center py-[80px] '>
      <div className='container'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='col-span-3 md:col-span-1'>
            {/* Title */}
            <h3 className='text-2xl font-bold uppercase text-cDark dark:text-cLight'>
              {t("contact.title")}
            </h3>

            {/* Description */}
            <p className='py-2 text-sm text-cDark opacity-90 dark:font-light dark:text-cOffWhite'>
              {t("contact.description")}
            </p>

            {/* Info with icons */}
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined cursor-default text-2xl text-primary'>
                  location_on
                </span>
                <p className='font-medium text-cDark dark:text-cLight'>
                  {t("contact.location")}
                </p>
              </div>

              <div className='flex items-center gap-2 '>
                <span className='material-symbols-outlined cursor-default text-2xl text-primary'>
                  email
                </span>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className='font-medium text-cDark decoration-primary transition-all ease-in-out hover:underline dark:text-cLight'
                >
                  {t("contact.email")}
                </a>
              </div>

              <div className='flex items-center gap-2 '>
                <span className='material-symbols-outlined cursor-default text-2xl text-primary'>
                  work
                </span>
                <a
                  rel='noreferrer'
                  href='{your_linkedin_url}'
                  target='_blank'
                  className='font-medium text-cDark decoration-primary transition-all ease-in-out hover:underline dark:text-cLight'
                >
                  {t("contact.linkedin")}
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className='col-span-3 md:col-span-2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
