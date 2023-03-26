/* eslint-disable @next/next/no-img-element */
import React from 'react';

const feedBacksList = [
	{
		id: '1',
		img: '/assets/profile-1.jpg',
		name: 'Satish Patel',
		job: 'Founder & CEO. Huddle',
		feedback: `Fylo has improved our team productivity by an order of magnitude.
		Since making the switch our team has become a well-oiled
		collaboration machine.`,
	},
	{
		id: '2',
		img: '/assets/profile-2.jpg',
		name: 'Bruce McKenzie',
		job: 'Founder & CEO. Huddle 2',
		feedback: `Fylo has improved our team productivity by an order of magnitude.
		Since making the switch our team has become a well-oiled
		collaboration machine.`,
	},
	{
		id: '3',
		img: '/assets/profile-3.jpg',
		name: 'Eva Boyd',
		job: 'Founder & CEO. Huddle 3',
		feedback: `Fylo has improved our team productivity by an order of magnitude.
		Since making the switch our team has become a well-oiled
		collaboration machine.`,
	},
];

export default function Testimonials() {
	return (
		<section id='testimonials' className='bg-gray-50 dark:bg-darkBlue'>
			<div className='container mx-auto px-6 pt-12 pb-80 md:pb-96'>
				<div className='relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12'>
					{feedBacksList.map((el) => (
						<>
							{el.id === '1' && (
								<img
									src='/assets/bg-quotes.png'
									alt=''
									className='absolute left-1 -top-2 w-10 md:-top-16 md:w-20'
								/>
							)}
							<div
								key={el.id}
								className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3'
							>
								<p className='text-sm leading-5 md:text-lg'>{el.feedback}</p>
								<div className='flex space-x-4'>
									<img src={el.img} alt='' className='w-10 h-10 rounded-full' />
									<div>
										<h5 className='text-sm font-semibold'>{el.name}</h5>
										<p className='text-xs font-extralight'>{el.job}</p>
									</div>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</section>
	);
}
