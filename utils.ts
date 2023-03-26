export const setLightMode = () => {
	document.documentElement.classList.remove('dark');
	localStorage.setItem('color-theme', 'light');
};
export const setDarkMode = () => {
	document.documentElement.classList.add('dark');
	localStorage.setItem('color-theme', 'dark');
};
