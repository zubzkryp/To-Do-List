import './sidebar.css'

export default function buildSideBar() {
    const body = document.querySelector('body')
    const container = document.querySelector('#container')
    const sideBar = document.createElement("div")
    sideBar.id = 'side-bar'
    body.appendChild(sideBar)

    const dashBoard = document.createElement('div')
    dashBoard.classList.add('dashboard')
    sideBar.appendChild(dashBoard)

    const dashboardTitle = document.createElement('div')
    dashboardTitle.classList.add("dashboard-title") 
    dashboardTitle.textContent = 'Menu'
    dashBoard.appendChild(dashboardTitle)
}