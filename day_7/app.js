const menuLeft = document.getElementsByClassName('menu-left-icon')
const menuRigth = document.getElementsByClassName('square-icon')
const searchBox = document.getElementsByClassName('search-box')

const notifications = document.getElementsByClassName('notifications')
const menuOptions = document.getElementsByClassName('menu-options')

const openMenu = () => {
	notifications[0].classList.toggle("transition-notifications")
	menuOptions[0].classList.toggle("transition-menu-options")
}

const search = () => {
	searchBox[0].classList.toggle("search-transition")
}

menuLeft[0].addEventListener('click', openMenu, false )
menuRigth[0].addEventListener('click', search, false )