"use client"

import { Typewriter } from "react-simple-typewriter"
import { useTypewriter } from "react-simple-typewriter"

interface Props {
	customText: string
}

const TypeParagraph = ({ customText }: Props) => {
	const [text] = useTypewriter({
		words: [customText],
		loop: 1,
		typeSpeed: 40,
	})
	return <p className="text-lg md:text-2xl text-gray-500">{text}</p>
}
export default TypeParagraph
