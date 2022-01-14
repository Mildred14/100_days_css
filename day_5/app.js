var date = new Date()
var pastDate = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000))
const today = `${date.getDate()}.  ${date.toLocaleString('default', { month: 'short' })}`
const lastWeek = `${pastDate.getDate()}.  ${pastDate.toLocaleString('default', { month: 'short' })}`
document.getElementById('current').innerHTML = today
document.getElementById('past').innerHTML = lastWeek

document.addEventListener('DOMContentLoaded', function() {
	const wrapBlueLines = document.getElementById('wrap-blue-lines')
	const wrapRedLines = document.getElementById('wrap-red-lines')

	const createPoints = () => {
		for(let i=1; i<=7; i++) {
			const redPoint = document.createElement('div')
			const bluePoint = document.createElement('div')
			bluePoint.className = `point-${i} dot bg-blue`
			redPoint.className = `point-${i} dot bg-red`

			wrapBlueLines.appendChild(bluePoint)
			wrapRedLines.appendChild(redPoint)
		}
	}
	createPoints()
}, false)



const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

days.forEach((day) => {
	let paragraphElement = document.createElement('p')
	paragraphElement.className = 'day'
	paragraphElement.innerHTML = day
	return document.getElementById('days').appendChild(paragraphElement)
})

