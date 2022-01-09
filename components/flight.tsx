type Props = {
	flight?: any
	children?: React.ReactNode
}

function getArrivalDate(date: string): string {
	if (date) {
		const arrivalTime = new Date(date)
		return arrivalTime.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	}
	return '- : -'
}

export default function Flight({ flight }: Props) {
	return (
		<div className='flex-col items-center justify-center flex-1 h-full'>
			<div className='flex-col space-y-6 items-center justify-center pb-20'>
				<div className='inline-flex space-x-5 items-center justify-start w-full'>
					<p className='text-2xl text-center font-bold text-yellow-400'>{flight?.flight?.iata}</p>
					<p className='text-2xl text-center'>{flight?.airline?.iata}</p>
					<p className='text-2xl text-center'>Flight from</p>
				</div>
				<div className='inline-flex items-center justify-start'>
					<p className='text-6xl font-bold'>{flight?.arrival?.airport}</p>
				</div>
				<div className='inline-flex items-center justify-between w-full'>
					<div className='inline-flex flex-col space-y-1'>
						<div className='inline-flex space-x-2 justify-between'>
							<p className='text-sm font-bold text-yellow-400'>{flight?.arrival?.iata}</p>
							<p className='text-sm'>{flight?.arrival?.airport}</p>
						</div>
						<p className='text-sm'>Terminal {flight?.arrival?.terminal}</p>
					</div>
					<div className='inline-flex flex-col space-y-1'>
					<div className='inline-flex space-x-2 justify-between'>
							<p className='text-sm font-bold text-yellow-400'>{flight?.departure?.iata}</p>
							<p className='text-sm'>{flight?.departure?.airport}</p>
						</div>
						<p className='text-sm'>Terminal {flight?.arrival?.terminal}</p>
					</div>
				</div>
			</div>
			<div className='flex-col space-y-6 items-center justify-center pb-20'>
				<div className='inline-flex flex-col items-start justify-start'>
					<p className='text-xs'>Status</p>
					<p className='text-lg font-bold uppercase text-yellow-400'>{flight?.flight_status}</p>
				</div>
				<div className='inline-flex items-center justify-between w-full'>
					<div className='inline-flex flex-col space-y-1'>
						<p className='text-xs'>Date</p>
						<p className='text-lg font-bold'>{flight?.flight_date}</p>
					</div>
					<div className='inline-flex flex-col space-y-1'>
						<p className='text-xs'>Arrival time</p>
						<p className='text-lg font-bold'>
							{getArrivalDate(flight?.arrival?.estimated)}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
