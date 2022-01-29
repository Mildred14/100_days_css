const menuLeft = document.getElementsByClassName('menu-left-icon')
const notifications = document.getElementsByClassName('notifications')
const menuOptions = document.getElementsByClassName('menu-options')

const openMenu = () => {
	notifications[0].classList.toggle("transition-notifications")
	menuOptions[0].classList.toggle("transition-menu-options")
}

menuLeft[0].addEventListener('click', openMenu, false )