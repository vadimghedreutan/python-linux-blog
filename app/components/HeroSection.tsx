import { BeakerIcon } from "@heroicons/react/24/solid"
import TypeParagraph from "./UI/TypeParagraph"

const HeroSection = () => {
	return (
		<section className="px-3 pt-5 pb-12">
			<div className="flex items-center justify-center py-8">
				<BeakerIcon className="h-12 w-12 text-blue-500" />
			</div>
			<div className="flex items-center justify-center mt-5 max-w-screen-lg mx-auto">
				<div className="flex flex-col space-y-5 text-center">
					<h1 className="text-3xl md:text-5xl font-bold font-poppins flex flex-col">
						<span className="underline decoration-[#3B81F6] decoration-2 underline-offset-4 flex-wrap break-words mb-2">
							All Articles
						</span>
					</h1>
					<TypeParagraph customText="The blog likely covers a wide range of topics related to Python and Linux" />
				</div>
			</div>
		</section>
	)
}
export default HeroSection
