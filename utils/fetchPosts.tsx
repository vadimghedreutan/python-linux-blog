import { groq } from "next-sanity"
import { client } from "../lib/sanity.client"

export const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[] ->
} | order(_createdAt desc)
`
export const fetchPosts = async () => {
	const posts = await client.fetch(query)
	return posts
}

export const fetchPost = async (querySlug: string) => {
	const query = groq`
    *[_type=='post' && slug.current == "${querySlug}"] [0] {
      ...,
      author->,
      categories[] ->
    }
`
	const post = await client.fetch(query)
	return post
}
