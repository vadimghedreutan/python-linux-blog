import { fetchPost } from "../../../../utils/fetchPosts"
import { urlFor } from "../../../../lib/sanity.client"
import { PortableText } from "@portabletext/react"
import { RichTextBody } from "../../../components/RichTextBody"
import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"

export const revalidate = 60 //every 60 secods

export async function generateStaticParams() {
	const query = groq`
		*[_type=='post'] {
			slug
		}
	`
	const slugs: Post[] = await client.fetch(query)
	const slugRoutes = slugs.map((slug) => slug.slug.current)

	return slugRoutes.map((slug) => ({
		slug,
	}))
}

const page = async ({ params }: any) => {
	const post: Post = await fetchPost(params.slug)

	return (
		<article className="px-3 py-5 max-w-screen-sm mx-auto">
			<section className="flex flex-col my-8">
				<div className="flex items-center space-x-4 mb-4">
					<div>
						{post.categories.map((category) => (
							<span
								className="px-4 py-2 text-sm rounded-full bg-[#E6E6E6] dark:text-gray-900 font-light"
								key={category._id}
							>
								{category.title}
							</span>
						))}
					</div>
					<span className="text-gray-500 text-sm">
						{new Date(post._createdAt).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</span>
				</div>
				<div>
					<h5 className="text-2xl md:text-4xl font-bold font-poppins">
						{post.title}
					</h5>
				</div>
				<div className="w-full h-auto mt-12">
					{post.mainImage && (
						<img
							className="object-contain rounded-2xl bg-gray-200 p-1"
							src={urlFor(post.mainImage).url()}
							alt={post.title}
						/>
					)}
				</div>
			</section>
			<section>
				<div>
					<PortableText value={post.body} components={RichTextBody} />
				</div>
			</section>
		</article>
	)
}
export default page
