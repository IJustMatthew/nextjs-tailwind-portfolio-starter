import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
}

// filePathPattern: `posts/**/*.mdx`,
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    subTitle: {
      type: "string",
      required: false
    },
    description: {
      type: "string"
    },
    readTime: {
      type: "number",
      required: false
    },
    date: {
      type: "string",
      required: true
    },
    lang: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: false
    },
    cardType: {
      type: "string",
      required: false
    }
  },
  computedFields
}))

// Generate any other document types here and add them to the documentTypes[] below
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post]
})
