const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const panel = document.querySelector('[data-nav-panel]');

if (header) {
	const onScroll = () => {
		header.classList.toggle('is-scrolled', window.scrollY > 40);
	};
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
}

if (toggle && panel) {
	const closeMenu = () => {
		toggle.setAttribute('aria-expanded', 'false');
		panel.classList.remove('is-open');
		panel.inert = true;
	};

	const openMenu = () => {
		toggle.setAttribute('aria-expanded', 'true');
		panel.classList.add('is-open');
		panel.inert = false;
		const firstLink = panel.querySelector('a');
		firstLink?.focus();
	};

	toggle.addEventListener('click', () => {
		const isOpen = toggle.getAttribute('aria-expanded') === 'true';
		isOpen ? closeMenu() : openMenu();
	});

	panel.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
			closeMenu();
			toggle.focus();
		}
	});
}
