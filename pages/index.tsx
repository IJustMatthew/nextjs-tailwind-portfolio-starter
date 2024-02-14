import { allPosts } from "@/.contentlayer/generated"
import BlogList, { PostThumbnail } from "@/components/Blog/BlogList"
import Button from "@/components/Button/Button"
import Hero from "@/components/Hero/Hero"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"

import InfoCard from "@/components/About/InfoCard"
import InfoCircleBar from "@/components/About/InfoCircle"
import InfoExperience from "@/components/About/InfoExperience"
import InfoTextPair from "@/components/About/InfoTextPairs"
import TestimonialCard from "@/components/About/TestimonialCard"
import { Contact } from "@/components/Contact"
import SubGalleryChooser from "@/components/Gallery/SubGallery"
import SplideList from "@/components/Splide/SplideList"
import { useRouter } from "next/router"

type HomeProps = {
  locale: string
}

export default function HomePage({ locale }: HomeProps): JSX.Element {
  const { t } = useTranslation()
  const router = useRouter()

  // Create donwloadable link for the CV
  function dowloadCV(): void {
    const a = document.createElement("a")
    a.href = `${process.env.NEXT_PUBLIC_HOST_URL}/img/cv/cv-file-${locale}.pdf`
    a.download = `${t("downloadCvFileName")} ${locale}`
    a.click()
  }

  // Redirect to 404 page
  function noNotFound(): void {
    router.push("/not-found")
  }

  // Filter BLOG/CASE STUDY posts by language & fix contentlayer bugs with \r
  const filteredPostsByLang: PostThumbnail[] = []
  allPosts.forEach((post) => {
    if (post.lang.slice(0, 2) === locale) {
      filteredPostsByLang.push({
        title: post.title,
        description:
          post.description!.length >= 120
            ? post.description!.slice(0, 120) + " ..."
            : post.description!,
        thumbnail: post.thumbnail!.replace("\r", ""),
        slug: post.slug,
        hasButton: false,
        type: post.cardType!.replace("\r", ""),
        linkType: ""
      })
    }
  })

  return (
    <>
      <Head>
        <title>{t("seo.home.title")}</title>
        <meta name='description' content={t("seo.home.description")} />
        <meta name='author' content={t("seo.home.author")} />
        <meta name='og:title' content={t("seo.home.title")} key='title' />
        <meta name='og:description' content={t("seo.home.description")} />
        <meta name='og:url' content={`${process.env.NEXT_PUBLIC_HOST_URL}`} />
        <meta
          name='og:image'
          content={`${process.env.NEXT_PUBLIC_HOST_URL}/img/website-thumbnail.jpg`}
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_HOST_URL}`} />
        <link
          rel='alternate'
          hrefLang='en'
          href={`${process.env.NEXT_PUBLIC_HOST_URL}`}
        />
        <link
          rel='alternate'
          hrefLang='de'
          href={`${process.env.NEXT_PUBLIC_HOST_URL}/de`}
        />
      </Head>
      <div className='w-full'>
        {/* Hero */}
        <Hero />

        {/* Components */}
        <section
          className='flex min-h-[80vh] items-center justify-center overflow-hidden bg-cOffWhite py-[80px] dark:bg-cDeepDark'
          id='components'
        >
          <div className='container'>
            <div className='mb-14 flex w-full flex-col items-center gap-10'>
              <h2 className='mb-2 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                {t("componentTitles.simepleComponents")}
              </h2>
              {/* Section title */}
              <SectionTitle
                title={t("sectionTitle.title")}
                subTitle1={t("sectionTitle.subTitle1")}
                subTitle2={t("sectionTitle.subTitle2")}
              />

              {/* Info key-value text pair */}
              <InfoTextPair
                title={t("infoTextPair.key")}
                content={t("infoTextPair.value")}
              />

              {/* Skill card */}
              <div className='max-w-[300px]'>
                <InfoCard
                  quantity={t("infoCard.quantity")}
                  text1={t("infoCard.text1")}
                  text2={t("infoCard.text2")}
                />
              </div>

              {/* Circle progression bar */}
              <InfoCircleBar percentageValue={50} title={t("progressbar")} />

              {/* Custom button */}
              <div className='!mt-6 !inline-block'>
                <Button
                  text={t("customButton")}
                  icon='download'
                  handler={dowloadCV}
                  customClass='min-w-[300px]'
                />
              </div>

              {/* Experience/Education list */}
              <div className='w-full space-y-4 md:w-1/2'>
                <InfoExperience
                  icon={t("experience.icon")}
                  date={t("experience.date")}
                  title={t("experience.title")}
                  subTitle={t("experience.subTitle")}
                  description={t("experience.description")}
                />

                <InfoExperience
                  icon={t("school.icon")}
                  date={t("school.date")}
                  title={t("school.title")}
                  subTitle={t("school.subTitle")}
                  description={t("school.description")}
                />
              </div>

              {/* Testimonial card */}
              <div className='w-full md:w-1/3'>
                <TestimonialCard
                  image='/img/testimonials/user.png'
                  name={t("testimonial.name")}
                  description={t("testimonial.description")}
                  title={t("testimonial.title")}
                  company={t("testimonial.company")}
                />
              </div>

              {/* Slider/Swiper */}
              <div className='w-full'>
                <div className='my-14'>
                  <div className='mb-4 flex w-full flex-col items-center'>
                    <h2 className='mb-2 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                      {t("componentTitles.sliderComponents")}
                    </h2>
                  </div>
                  <SplideList />
                </div>
              </div>

              {/* Gallery - MultiGallery */}
              <div className='w-full'>
                <div className='mb-4'>
                  <div className='flex w-full flex-col items-center'>
                    <h2 className='mb-2 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                      {t("componentTitles.galleryComponent")}
                    </h2>
                  </div>
                  <SubGalleryChooser />
                </div>
              </div>

              {/* Blog */}
              <div className='w-full'>
                <div className='mb-14 flex w-full flex-col items-center'>
                  <h2 className='mb-2 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                    {t("componentTitles.blogComponent")}
                  </h2>
                  <BlogList posts={filteredPostsByLang} />
                </div>
              </div>

              {/* Contact */}
              <div className='flex w-full flex-col items-center'>
                <h2 className='-mb-6 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                  {t("componentTitles.contactComponent")}
                </h2>
                <Contact />
              </div>

              {/* Custom 404 */}
              <div className='flex w-full flex-col items-center'>
                <h2 className='mb-6 inline-block w-auto rounded bg-primary px-4 py-2 text-center text-xl font-bold capitalize text-cLight shadow'>
                  {t("componentTitles.notFoundComponent")}
                </h2>
                <div className='!mt-6 !inline-block'>
                  <Button
                    text={t("buttons.notFound")}
                    icon='keyboard_arrow_down'
                    customClass='min-w-[300px]'
                    handler={noNotFound}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
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
