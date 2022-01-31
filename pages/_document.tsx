import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GtagScript } from '../utils/analytics'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<GtagScript />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
export default MyDocument
