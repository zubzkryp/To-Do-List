import './sidebar.css'

export default function buildSideBar() {
    const body = document.querySelector('body')
    const content = document.querySelector('#content')
    const sideBar = document.createElement("div")
    sideBar.id = 'side-bar'
    body.appendChild(sideBar)

    const dashBoard = document.createElement('div')
    dashBoard.classList.add('dashboard-title')

}