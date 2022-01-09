import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [{ label: 'Home', href: '/' }]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='pt-safe w-full bg-zinc-900 fixed top-0'>
			<header className='bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-800'>
				<div className='mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between'>
					<nav className='space-x-6 flex items-center'>
						<div className='hidden sm:block'>
							<div className='space-x-6 flex items-center'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-yellow-500 dark:text-yellow-400'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
