import "../../styles/globals.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Providers from "../components/Providers"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<body className="bg-[#E6E6E6] dark:bg-[#242933]">
				<div className="wrapper">
					<Providers>
						<Header />
						<main className="transition-all duration-300 ease-out bg-gradient-to-t from-gray-50 to-[#F3EEE2] dark:bg-gradient-to-t dark:from-[#242933] dark:to-[#2A303C]">
							{children}
						</main>
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
