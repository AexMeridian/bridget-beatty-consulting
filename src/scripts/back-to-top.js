const button = document.querySelector('[data-back-to-top]');

if (button) {
	const onScroll = () => {
		button.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8);
	};

	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
}
