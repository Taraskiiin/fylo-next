import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { openSans } from '../fonts';
import Hero from '@/components/Hero';
import { setLightMode, setDarkMode } from '@/utils';

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
			</main>
		</>
	);
}
