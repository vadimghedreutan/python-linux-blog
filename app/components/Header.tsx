import Link from "next/link"
import DarkModeButton from "./UI/DarkModeButton"

const Header = () => {
	return (
		<header className="px-10 py-5 bg-[#E6E6E6] dark:bg-[#242933]">
			<div className="flex items-center justify-between max-w-screen-2xl mx-auto">
				<Link href="/" className="text-2xl font-bold font-poppins">
					<span>✌️</span> Build for Mars
				</Link>
				<DarkModeButton />
			</div>
		</header>
	)
}
export default Header
