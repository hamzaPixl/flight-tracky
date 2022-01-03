import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='pb-safe w-full bg-zinc-100 border-t dark:bg-zinc-900 dark:border-zinc-800 fixed bottom-0'>
				<div className='mx-auto px-6 max-w-md h-16 flex items-center justify-around'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`space-y-1 w-full h-full flex flex-col items-center justify-center ${
									router.pathname === href
										? 'text-indigo-500 dark:text-indigo-400'
										: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								}`}
							>
								{icon}
								<span className='text-xs text-zinc-600 dark:text-zinc-400'>
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Home',
		href: '/',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z'
					fill='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Contact',
		href: '/',
		icon: (
			<svg
				viewBox='0 0 512 512'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='m100.5 432h311c33.084 0 60-26.916 60-60v-312c0-33.084-26.916-60-60-60h-311c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h291 20c33.084 0 60-26.916 60-60v-.05c-16.725 12.583-37.506 20.05-60 20.05h-20-291c-11.028 0-20-8.972-20-20s8.972-20 20-20zm-20-372c0-11.028 8.972-20 20-20h311c11.028 0 20 8.972 20 20v312c0 11.028-8.972 20-20 20h-311c-7.009 0-13.742 1.208-20 3.427zm174 188c44.663 0 81 36.336 81 81h40c0-47.323-27.311-88.38-66.995-108.257 9.947-12.221 15.924-27.795 15.924-44.743 0-39.149-31.851-71-71-71s-71 31.851-71 71c0 17.305 6.23 33.177 16.556 45.509-38.866 20.154-65.485 60.771-65.485 107.491h40c0-44.664 36.337-81 81-81zm-1.071-103c17.094 0 31 13.907 31 31s-13.906 31-31 31-31-13.907-31-31 13.906-31 31-31z'
					fill='currentColor'
				/>
			</svg>
		),
	},
]
