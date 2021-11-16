const menu = document.getElementsByClassName('icon-menu')
menu[0].addEventListener('click', handleAnimation, false)

function handleAnimation() {
  let menuClasses = menu[0].classList
  menuClasses.toggle('cross-icon')

	const reverseAnimation = () => {
		menuClasses.add('icon-reverse')
		setTimeout(() => {
			menuClasses.remove('icon-reverse')
		}, 1000)
	}

	!menuClasses.contains('cross-icon') ? reverseAnimation() : ''
}