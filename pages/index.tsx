import { useState } from 'react'
import Link from 'next/link'
import Page from '@/components/page'
import Section from '@/components/section'

export default function Index() {
	const [idFlight, seIdFlight] = useState('')

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200 flex justify-center'>
					Flight tracker
				</h2>

				<div className='mt-8 flex justify-center'>
					<input
						type='text'
						id='flight'
						className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
						placeholder='Flight'
						onChange={(e) => {
							seIdFlight(e.target.value)
						}}
					/>
					<div className='px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r'>
						<Link href={`/flight/${idFlight}`}>Track</Link>
					</div>
				</div>

				<div></div>
			</Section>
		</Page>
	)
}
