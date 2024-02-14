//pages/sitemap.xml.js
import { allPosts, Post } from "@/.contentlayer/generated"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"

function generateSiteMap(
  posts: Post[],
  host: string
): InferGetServerSidePropsType<typeof getServerSideProps> {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
    http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <url>
         <loc>${host}</loc>
        <xhtml:link
            rel="alternate"
            hreflang="en"
            href="${host}" />
        <xhtml:link
            rel="alternate"
            hreflang="de"
            href="${host}/de" />
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${host}${post.slug}`}</loc>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

export const getServerSideProps = (async (context) => {
  const posts = await allPosts

  const sitemap = generateSiteMap(posts, process.env.NEXT_PUBLIC_HOST_URL!)

  context.res.setHeader("Content-Type", "text/xml")
  context.res.write(sitemap)
  context.res.end()
  return {
    props: {}
  }
}) satisfies GetServerSideProps

export default function SiteMap() {}
