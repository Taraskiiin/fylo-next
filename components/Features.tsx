/* eslint-disable @next/next/no-img-element */
import React from 'react';

const featureList = [
	{
		id: '1',
		img: '/assets/icon-access-anywhere.svg',
		title: 'Access your file from anywhere',
		text: `The ability to use a smartphone, tablet, or computer to access your
		account means your files follow you everywhere.`,
	},
	{
		id: '2',
		img: '/assets/icon-security.svg',
		title: 'Security you can trust',
		text: `2-factor authentication and user-controlled encryption are just a
		couple of the security features we allow to help secure your files.`,
	},
	{
		id: '3',
		img: '/assets/icon-collaboration.svg',
		title: 'Access your file from anywhere',
		text: `The ability to use a smartphone, tablet, or computer to access your
		account means your files follow you everywhere.`,
	},
	{
		id: '4',
		img: '/assets/icon-any-file.svg',
		title: 'Security you can trust',
		text: `2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.`,
	},
];

export default function Features() {
	return (
		<section id='features' className='pt-12 bg-gray-50 dark:bg-darkBlue1'>
			<div className='container mx-auto px-6 pb-32'>
				<div className='grid grid-cols-1 justify-items-center gap-16 space-y-24 text-center md:grid-cols-2 md:space-y-0'>
					{featureList.map((el) => (
						<div
							key={el.id}
							className='flex flex-col items-center space-y-2 md:max-w-[430px] '
						>
							<div className='flex items-center justify-center h-24 mb-6'>
								<img src={el.img} alt={el.title} />
							</div>
							<h3 className='text-xl font-bold'>{el.title}</h3>
							<p className='max-w-md'>{el.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
