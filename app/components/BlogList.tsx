"use client"
import { useState } from "react"
import PostItem from "./PostItem"
import Input from "./UI/Input"

type Props = {
	posts: Post[]
}

function BlogList({ posts }: Props) {
	const [query, setQuery] = useState("")

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	return (
		<section className="px-3 py-5 max-w-screen-sm mx-auto">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
				<Input
					type="search"
					placeholder="Search..."
					onChange={handleInputChange}
					value={query}
					className="block w-full p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 leading-normal resize-none"
				/>
			</div>

			<div className="mt-12">
				{posts
					.filter(
						(post) =>
							post.title.toLowerCase().includes(query) ||
							post.description.toLowerCase().includes(query)
					)
					.map((post) => (
						<PostItem key={post._id} post={post} />
					))}
			</div>
		</section>
	)
}
export default BlogList
