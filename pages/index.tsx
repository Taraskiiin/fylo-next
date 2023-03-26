import React, { useState } from 'react';
import Head from 'next/head';

import { openSans } from '../fonts';
import { setLightMode, setDarkMode } from '@/utils';

import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Productive from '@/components/Productive';
import Testimonials from '@/components/Testimonials';
import EarlyAccess from '@/components/EarlyAccess';
import Footer from '@/components/Footer';

export default function Home() {
	const [mode, setMode] = useState<string>('light');

	const toggleMode = () => {
		if (mode === 'dark') {
			setMode('light');
			setLightMode();
			return;
		}
		setMode('dark');
		setDarkMode();
	};

	return (
		<>
			<Head>
				<title>Fylo</title>
			</Head>
			<main style={openSans.style} className='dark:bg-darkBlue dark:text-white'>
				<Hero toggleMode={toggleMode} mode={mode} />
				<Features />
				<Productive />
				<Testimonials />
				<EarlyAccess />
				<Footer />
			</main>
		</>
	);
}
