const navlink = document.getElementById('dropdownNavbarLink');
const login = document.getElementById('login');

navlink?.addEventListener('click', e => {
	e.preventDefault();
	const navBar = document.getElementById('list');
	if (navBar?.classList.contains('hidden'))
		navBar?.classList.remove('hidden');
	else
		navBar?.classList.add('hidden');
})

login?.addEventListener('click', e => {
	e.preventDefault();
	const passwd = <HTMLInputElement>document.querySelector('#passwd');
	const email = <HTMLInputElement>document.querySelector('#email');
	if (!email.value && !passwd.value) {
		email.classList.add('outline-error')
		passwd.classList.add('outline-error');
		setTimeout(() => {
			email.classList.remove('outline-error');
			passwd.classList.remove('outline-error');
		}, 3000)

	}
})