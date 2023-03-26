/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
						<div className='flex flex-col space-y-3'>
							<a href='#'>About</a>
							<a href='#'>Jobs</a>
							<a href='#'>Press</a>
							<a href='#'>Blog</a>
						</div>
						<div className='flex flex-col space-y-3'>
							<a href='#'>Contact Us</a>
							<a href='#'>Terms</a>
							<a href='#'>Privacy</a>
						</div>
					</div>
					<div className='flex justify-center pb-10 space-x-3'>
						<div>
							<a href='#'>
								<img
									src='/assets/facebook.svg'
									alt=''
									className='p-2 bg-darkBlue rounded-full ficon'
								/>
							</a>
						</div>
						<div>
							<a href='#'>
								<img
									src='/assets/twitter.svg'
									alt=''
									className='p-2 bg-darkBlue rounded-full ficon'
								/>
							</a>
						</div>
						<div>
							<a href='#'>
								<img
									src='/assets/instagram.svg'
									alt=''
									className='p-2 bg-darkBlue rounded-full ficon'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
