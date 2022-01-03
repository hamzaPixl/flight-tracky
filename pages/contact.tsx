import Page from '@/components/page'
import Section from '@/components/section'

const Contact = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Contact</h2>
			<section className='text-gray-600 body-font relative'>
				<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
					Feedback
				</h2>
				<div className='relative mb-4'>
					<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='message' className='leading-7 text-sm text-gray-600'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
					></textarea>
				</div>
				<button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
					Send
				</button>
			</section>
		</Section>
	</Page>
)

export default Contact
