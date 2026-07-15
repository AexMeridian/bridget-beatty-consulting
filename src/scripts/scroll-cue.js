const cue = document.querySelector('[data-scroll-cue]');

if (cue) {
	const onScroll = () => {
		cue.classList.toggle('is-hidden', window.scrollY > 80);
	};

	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
}
