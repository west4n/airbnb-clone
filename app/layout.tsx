import Navbar from './components/navbar/Navbar'

import './globals.css'

import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb Clone',
}

const font = Nunito({
	subsets: ['latin'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
