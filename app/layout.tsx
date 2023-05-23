import Navbar from './components/navbar/Navbar'

import './globals.css'

import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb Clone',
}

const font = Nunito({
	subsets: ['latin'],
})

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const currentUser = await getCurrentUser()

	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
