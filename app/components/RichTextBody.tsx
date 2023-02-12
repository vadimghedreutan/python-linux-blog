import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../../lib/sanity.client"

export const RichTextBody = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className="relative w-full mx-auto h-96 bg-[#24262E] my-4">
					<Image
						src={urlFor(value).url()}
						alt="Blog"
						className="object-contain"
						fill
					/>
				</div>
			)
		},
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className="mt-lg list-decimal">{children}</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className="text-5xl py-10 font-bold">{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className="text-4xl py-10 font-bold">{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className="text-3xl py-10 font-bold">{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className="text-2xl py-10 font-bold">{children}</h4>
		),

		blockquote: ({ children }: any) => (
			<blockquote className="border-l-[#3B81F6] border-l-4 pl-5 py-5 my-5">
				{children}
			</blockquote>
		),
		p: ({ children }: any) => <p className="py-2">{children}</p>,
		code: ({ children }: any) => <code>{children}</code>,
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined
			return (
				<Link
					href={value.href}
					rel={rel}
					className="underline decoration-[#3B81F6] hover:decoration-white"
				>
					{children}
				</Link>
			)
		},
	},
}
