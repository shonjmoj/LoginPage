const navlink = document.getElementById('dropdownNavbarLink')
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const intra = document.getElementById('42');
const github = document.getElementById('github');
const gmail = document.getElementById('gmail');
const buttons = [intra, github, gmail];

navlink?.addEventListener('click', e => {
	e.preventDefault();
	const navBar = document.getElementById('dropdownNavbar');

	if (navBar?.classList.contains('hidden')) {
		navBar?.classList.remove('hidden');
	}
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

signup?.addEventListener('click', e => {
	e.preventDefault();
	const fName = <HTMLInputElement>document.getElementById('name');
	const lastName = <HTMLInputElement>document.getElementById('lastname');
	const signEmail = <HTMLInputElement>document.getElementById('signemail');
	const signPasswd = <HTMLInputElement>document.getElementById('signpasswd');
	if (!fName.value && !lastName.value && !signEmail.value && !signPasswd.value) {

		fName.classList.add('outline-error')
		lastName.classList.add('outline-error');
		signEmail.classList.add('outline-error');
		signPasswd.classList.add('outline-error');
		setTimeout(() => {
			fName.classList.remove('outline-error')
			lastName.classList.remove('outline-error');
			signEmail.classList.remove('outline-error');
			signPasswd.classList.remove('outline-error');
		}, 3000)
	}
})

buttons.forEach(button => {
	button?.addEventListener('mouseover', e => {
		button.firstElementChild.classList.replace('fill-white', '.intra');
		button.addEventListener('mouseout', e => {
			button.firstElementChild.classList.replace('.intra', 'fill-white');
		})
	})
})