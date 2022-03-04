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
		login.parentElement!.parentElement!.innerHTML += `
			<span>empty inputs</span>
		`
		// console.log(login.parentElement?.parentElement)
	}
})