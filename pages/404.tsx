import Button from "@/components/Button/Button"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Custom404() {
  const { t } = useTranslation()
  const router = useRouter()
  function backToHome() {
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>{t("seo.notFound.title")}</title>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='flex min-h-screen w-full flex-col items-center justify-center py-[100px]'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='container flex w-full flex-col content-center items-center justify-center'>
            <p className='text-4xl font-black text-primary'>
              {t("notFoundPage.text1")}
            </p>
            <h1 className='mb-4 text-xl font-medium text-cDark dark:text-cLight'>
              {t("notFoundPage.text2")}
            </h1>
            <Image
              alt=''
              src='/img/404.gif'
              height={500}
              width={400}
              className='rounded-xl shadow'
            />
            <div className='mt-4'>
              <Button
                text={t("buttons.home")}
                icon='arrow_forward_ios'
                handler={backToHome}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale
    }
  }
}
