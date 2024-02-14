import BlogCard from "@/components/Blog/BlogCard"
import CardPlaceholder from "@/components/Blog/CardPlaceholder"
import { blogCardAnimation, blogListAnimation } from "@/constants/animations"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export type PostThumbnail = {
  title: string
  description: string
  thumbnail: string
  slug: string
  hasButton: boolean
  type: string
  linkType: string
}

export default function BlogList({ posts }: { posts: PostThumbnail[] }) {
  const blogCardsRef = useRef(null)
  const blogCardsIsInView = useInView(blogCardsRef, { once: true })

  return (
    <motion.div
      ref={blogCardsRef}
      variants={blogListAnimation}
      initial='hidden'
      animate={blogCardsIsInView ? "visible" : "hidden"}
      className='mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'
    >
      {posts.map((post) => (
        <motion.div
          key={post.title}
          variants={blogCardAnimation}
          className='flex flex-1'
        >
          {post.type === "card" ? (
            <BlogCard
              title={post.title}
              description={post.description}
              thumbnail={post.thumbnail}
              link={post.slug}
              hasButton={post.hasButton}
              linkType={post.linkType}
            />
          ) : (
            <CardPlaceholder />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
