import { urlFor } from "../../lib/sanity.client"
import ClientSideRoute from "./ClientSideRoute"

interface Props {
	post: Post
}

const PostItem = ({ post }: Props) => {
	return (
		<ClientSideRoute route={`/post/${post.slug.current}`}>
			<article className="flex flex-row w-full gap-4 mt-8 mb-8">
				<div className="flex flex-col justify-between leading-normal flex-1">
					<h5 className="mb-2 md:text-2xl font-bold font-poppins">
						{post.title}
					</h5>
					<p className="mb-3 font-normal text-gray-600 text-sm md:text-base line-clamp-2">
						{post.description}
					</p>
					<div className="flex items-center space-x-4">
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
							{new Date(post._createdAt).toLocaleDateString(
								"en-US",
								{
									day: "numeric",
									month: "long",
									year: "numeric",
								}
							)}
						</span>
					</div>
				</div>
				<div className="flex flex-shrink w-1/4 h-auto">
					{post.mainImage && (
						<img
							className="object-cover rounded-md bg-gray-200 p-1"
							src={urlFor(post.mainImage).url()}
							alt={post.title}
						/>
					)}
				</div>
			</article>
			<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		</ClientSideRoute>
	)
}

export default PostItem
