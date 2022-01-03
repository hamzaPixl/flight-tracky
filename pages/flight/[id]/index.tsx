import { useState, useEffect } from 'react'
import FlightDetails from '@/components/flight'
import Page from '@/components/page'
import Section from '@/components/section'
import { useRouter } from 'next/router'
import { getFlight } from '../../../services/aviationstack'

type Props = {
	idFlight?: string
	children?: React.ReactNode
}

export default function Flight({ idFlight }: Props) {
	const router = useRouter()
	const [flight, setFlight] = useState([])

	useEffect(() => {
		const { id } = router.query
		if (id) {
			fetchFlight(id as string)
		}
	}, [router.query])

	function fetchFlight(id: string) {
		getFlight(id).then((result) => {
			setFlight(result)
		})
	}

	return (
		<Page>
			<Section>
				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
					{idFlight}
				</h2>
				<FlightDetails flight={flight} />
			</Section>
		</Page>
	)
}
