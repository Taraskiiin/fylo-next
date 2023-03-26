/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Features() {
	return (
		<section id='features' className='pt-12 bg-gray-50 dark:bg-darkBlue1'>
			<div className='container mx-auto px-6 pb-32'>
				<div className='flex flex-col space-y-24 text-center md:flex-row md:space-y-0'>
					<div className='flex flex-col items-center space-y-2 md:w-1/2'>
						<div className='flex items-center justify-center h-24 mb-6'>
							<img src='/assets/icon-access-anywhere.svg' alt='' />
						</div>
						<h3 className='text-xl font-bold'>
							Access your file from anywhere
						</h3>
						<p className='max-w-md'>
							The ability to use a smartphone, tablet, or computer to access
							your account means your files follow you everywhere.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-2 md:w-1/2'>
						<div className='flex items-center justify-center h-24 mb-6'>
							<img src='/assets/icon-security.svg' alt='' />
						</div>
						<h3 className='text-xl font-bold'>Security you can trust</h3>
						<p className='max-w-md'>
							2-factor authentication and user-controlled encryption are just a
							couple of the security features we allow to help secure your
							files.
						</p>
					</div>
				</div>
				<div className='flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0'>
					<div className='flex flex-col items-center space-y-2 md:w-1/2'>
						<div className='flex items-center justify-center h-24 mb-6'>
							<img src='/assets/icon-collaboration.svg' alt='' />
						</div>
						<h3 className='text-xl font-bold'>
							Access your file from anywhere
						</h3>
						<p className='max-w-md'>
							The ability to use a smartphone, tablet, or computer to access
							your account means your files follow you everywhere.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-2 md:w-1/2'>
						<div className='flex items-center justify-center h-24 mb-6'>
							<img src='/assets/icon-any-file.svg' alt='' />
						</div>
						<h3 className='text-xl font-bold'>Security you can trust</h3>
						<p className='max-w-md'>
							2-factor authentication and user-controlled encryption are just a
							couple of the security features we allow to help secure your
							files.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
