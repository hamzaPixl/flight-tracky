import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import * as gtag from '../utils/analytics'
import Meta from '@/components/meta'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeComplete', gtag.pageview)
		return () => {
			router.events.off('routeChangeComplete', gtag.pageview)
		}
	}, [router.events])

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Meta />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
