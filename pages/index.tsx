import { useState } from 'react'
import Link from 'next/link'
import Page from '@/components/page'
import Section from '@/components/section'

export default function Index() {
	const [idFlight, seIdFlight] = useState('')

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-bold text-yellow-400 flex justify-center'>
					Flight Tracky
				</h2>

				<div className='mt-8 flex flex-col justify-center'>
					<input
						type='text'
						id='flight'
						className='rounded-lg p-4 mt-5 text-gray-800 border-gray-200 bg-white'
						placeholder='FR2910'
						onChange={(e) => {
							seIdFlight(e.target.value)
						}}
					/>
					<div className='px-8 text-center mt-5 rounded-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r'>
						<Link href={`/flight/${idFlight}`}>Track</Link>
					</div>
				</div>

				<div></div>
			</Section>
		</Page>
	)
}
