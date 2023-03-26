/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Testimonials() {
	return (
		<section id='testimonials' className='bg-gray-50 dark:bg-darkBlue'>
			<div className='container mx-auto px-6 pt-12 pb-80 md:pb-96'>
				<div className='relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12'>
					<img
						src='/assets/bg-quotes.png'
						alt=''
						className='absolute left-1 -top-2 w-10 md:-top-16 md:w-20'
					/>

					<div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3'>
						<p className='text-sm leading-5 md:text-lg'>
							Fylo has improved our team productivity by an order of magnitude.
							Since making the switch our team has become a well-oiled
							collaboration machine.
						</p>
						<div className='flex space-x-4'>
							<img
								src='/assets/profile-1.jpg'
								alt=''
								className='w-10 h-10 rounded-full'
							/>
							<div>
								<h5 className='text-sm font-semibold'>Satish Patel</h5>
								<p className='text-xs font-extralight'>Founder & CEO. Huddle</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3'>
						<p className='text-sm leading-5 md:text-lg'>
							Fylo has improved our team productivity by an order of magnitude.
							Since making the switch our team has become a well-oiled
							collaboration machine.
						</p>
						<div className='flex space-x-4'>
							<img
								src='/assets/profile-2.jpg'
								alt=''
								className='w-10 h-10 rounded-full'
							/>
							<div>
								<h5 className='text-sm font-semibold'>Bruce McKenzie</h5>
								<p className='text-xs font-extralight'>
									Founder & CEO. Huddle 2
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3'>
						<p className='text-sm leading-5 md:text-lg'>
							Fylo has improved our team productivity by an order of magnitude.
							Since making the switch our team has become a well-oiled
							collaboration machine.
						</p>
						<div className='flex space-x-4'>
							<img
								src='/assets/profile-3.jpg'
								alt=''
								className='w-10 h-10 rounded-full'
							/>
							<div>
								<h5 className='text-sm font-semibold'>Eva Boyd</h5>
								<p className='text-xs font-extralight'>
									Founder & CEO. Huddle 3
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
