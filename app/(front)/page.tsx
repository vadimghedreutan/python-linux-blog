import { fetchPosts } from "../../utils/fetchPosts"
import BlogList from "../components/BlogList"
import HeroSection from "../components/HeroSection"

export const revalidate = 60

const HomePage = async () => {
	const posts = await fetchPosts()

	return (
		<>
			<HeroSection />
			<BlogList posts={posts} />
		</>
	)
}

export default HomePage
