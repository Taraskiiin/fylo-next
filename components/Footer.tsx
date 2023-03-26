/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const footerLinks = [
	{
		id: '1',
		col: [
			{
				id: '1',
				link: '#',
				title: 'About',
			},
			{
				id: '2',
				link: '#',
				title: 'Jobs',
			},
			{
				id: '3',
				link: '#',
				title: 'Press',
			},
			{
				id: '4',
				link: '#',
				title: 'Blog',
			},
		],
	},
	{
		id: '2',
		col: [
			{
				id: '1',
				link: '#',
				title: 'Contact Us',
			},
			{
				id: '2',
				link: '#',
				title: 'Terms',
			},
			{
				id: '3',
				link: '#',
				title: 'Privacy',
			},
		],
	},
];

const socialMedia = [
	{ id: '1', image: '/assets/facebook.svg', link: '#' },
	{ id: '2', image: '/assets/twitter.svg', link: '#' },
	{ id: '3', image: '/assets/instagram.svg', link: '#' },
];

export default function Footer() {
	return (
		<footer className='bg-darkBlue2 text-white'>
			<div className='container mx-auto pt-12 px-5 pb-10'>
				<div className='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					<div className='mt-10 space-y-6'>
						<div className='flex items-center space-x-3 md:-mt-10'>
							<div className='w-6'>
								<img src='/assets/icon-phone.svg' alt='' className='scale-10' />
							</div>
							<div>+1-543-123-4567</div>
						</div>
						<div className='flex items-center space-x-3'>
							<div className='w-6'>
								<img src='/assets/icon-email.svg' alt='' className='scale-10' />
							</div>
							<div>example@fylo.com</div>
						</div>
					</div>
					<div className='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
						{footerLinks.map((el) => (
							<div key={el.id} className='flex flex-col space-y-3'>
								{el.col.map((el) => (
									<Link
										key={el.id}
										href={el.link}
										className='hover:text-accentCyan'
									>
										{el.title}
									</Link>
								))}
							</div>
						))}
					</div>
					<div className='flex justify-center pb-10 space-x-3'>
						{socialMedia.map((el) => (
							<div key={el.id}>
								<Link href={el.link}>
									<img
										src={el.image}
										alt=''
										className='p-2 bg-darkBlue rounded-full ficon'
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
