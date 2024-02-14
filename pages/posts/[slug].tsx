import BackButton from "@/components/Button/BackButton"
import { Mdx } from "@/components/MDXComponents"
import styles from "@/styles/article.module.scss"
import { allPosts, Post } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head"
import Image from "next/image"

type PostProps = {
  post: Post
}

function PostPage({ post }: PostProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta name='author' content={t("seo.home.author")} />
        <meta name='og:title' content={post.title} key='title' />
        <meta name='og:description' content={post.description} />
        <meta
          name='og:url'
          content={`${process.env.NEXT_PUBLIC_HOST_URL}${post.slug}`}
        />
        <meta
          name='og:image'
          content={`${process.env.NEXT_PUBLIC_HOST_URL}${post.thumbnail}`}
        />
        <meta name='robots' content='index, follow' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "name": "${t("seo.home.author")}",
                  "editor": "${t("seo.home.author")}",
                  "headline": "${post.title}",
                  "description": "${post.description}",
                  "url": "${process.env.NEXT_PUBLIC_HOST_URL}${post.slug}",
                  "image": "${process.env.NEXT_PUBLIC_HOST_URL}${
                    post.thumbnail
                  }",
                  "author": {
                    "@type": "Person",
                    "name": "${t("seo.home.author")}"
                  },
                  "logo": "${process.env.NEXT_PUBLIC_HOST_URL}/logo.svg",
                  "datePublished": "2024-01-01",
                  "dateModified": "2024-01-01",
                  "articleBody": "${post.body.raw}",
                }
              `
          }}
        />
      </Head>
      <div className='my-[80px] flex w-full flex-col items-center justify-center'>
        <div className='container'>
          <BackButton routePath='/' />
        </div>
        <div className='container flex flex-wrap items-center justify-center'>
          <article
            className={`prose w-full py-6 dark:prose-invert ${styles.cArticle}`}
          >
            <div className='mb-4 flex w-full items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className='material-symbols-outlined m-0 cursor-default text-lg'>
                  timer
                </span>
                <p className='m-0 text-primary'>
                  {post.readTime} {t("blogPage.minutes")}
                </p>
              </div>

              <div className='flex items-baseline gap-2'>
                <p className='m-0 text-cDark dark:text-cLight'>
                  {t("blogPage.published")}:
                </p>
                <p className='m-0 text-primary'>{post.date}</p>
              </div>
            </div>
            <h1 className='m-0'>{post.title}</h1>
            <h2 className='mb-8 mt-0 text-xl font-light italic'>
              {post.subTitle}
            </h2>
            <Image
              src={post.thumbnail!.replace("\r", "")}
              width='600'
              height='300'
              style={{ width: "100%", height: "auto" }}
              alt={post.title}
            />

            {post.description && (
              <p className='text-x mt-2'>{post.description}</p>
            )}
            <hr className='my-4' />
            <Mdx code={post.body.code} />
          </article>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await allPosts
  const convertedPaths = posts.map((post) => {
    return {
      params: { slug: post.slugAsParams },
      locale: post.lang.slice(0, 2) // en-US || en/r bug -> en
    }
  })

  return {
    paths: convertedPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const post = allPosts.find((post) => {
    return post.slugAsParams === params.slug
  })

  return {
    props: {
      post: { ...post },
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default PostPage
