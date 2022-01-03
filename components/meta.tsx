import Head from 'next/head'

const Meta = () => (
	<Head>
		<title>Flight tracky</title>
		<meta charSet='utf-8' />
		<meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>
		<meta name='apple-mobile-web-app-title' content='Flight tracky' />
		<meta name='application-name' content='Flight tracky' />
		<meta name='description' content='Track your flight' />
		<meta name='theme-color' content='#1d2020' />
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/>
		<link
			rel='apple-touch-icon'
			sizes='180x180'
			href='/images/apple-touch-icon.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='32x32'
			href='/images/favicon-32x32.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='16x16'
			href='/images/favicon-16x16.png'
		/>
		<link rel='manifest' href='/manifest.json' />
	</Head>
)

export default Meta
