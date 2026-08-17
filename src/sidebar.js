import './sidebar.css'
import { createElement, Menu, ChevronsRight, ListChecks, Logs } from 'lucide'

export default function buildSideBar() {
    const body = document.querySelector('body')
    const container = document.querySelector('#container')
    const sideBar = document.createElement("div")
    sideBar.id = 'side-bar'
    body.appendChild(sideBar)

    const dashBoard = document.createElement('div')
    dashBoard.classList.add('dashboard')
    sideBar.appendChild(dashBoard)

    const dashboardTitle = document.createElement('h1')
    dashboardTitle.classList.add("dashboard-title") 
    dashBoard.appendChild(dashboardTitle)

    const menu = document.createElement('div')
    menu.classList.add("dashboard-menu")
    dashboardTitle.appendChild(menu)
    menu.textContent = 'Menu'

    // Adding menu icon onto an element
    const menuIcon = createElement(Menu)
    dashboardTitle.appendChild(menuIcon)

    //small task title
    const dashboardTask = document.createElement('h3')
    dashboardTask.textContent = "TASKS"
    dashboardTask.classList.add('dashboard-task')
    dashBoard.appendChild(dashboardTask)

    // upcoming 
    const dashboardUpcoming = document.createElement('div')
    dashboardUpcoming.classList.add("dashboard-upcoming")
    dashBoard.appendChild(dashboardUpcoming)
    //buttons to view list
    const upcomingIcon = createElement(ChevronsRight) // icon for upcoming text
    dashboardUpcoming.appendChild(upcomingIcon)
    const upcoming = document.createElement('button')
    upcoming.classList.add("upcoming")
    upcoming.textContent = "Upcoming"
    dashboardUpcoming.appendChild(upcoming)

    // today tasks
    const dashboardToday = document.createElement('div')
    dashboardToday.classList.add("dashboard-today")
    dashBoard.appendChild(dashboardToday)
    //buttons to view today
    const todayIcon = createElement(ListChecks) // icon for today text
    dashboardToday.appendChild(todayIcon)
    const today = document.createElement('button')
    today.classList.add("today")
    today.textContent = "Today"
    dashboardToday.appendChild(today)

     // This week tasks
    const dashboardWeek = document.createElement('div')
    dashboardWeek.classList.add("dashboard-week")
    dashBoard.appendChild(dashboardWeek)
    //buttons to view today
    const weekIcon = createElement(Logs) // icon for today text
    dashboardWeek.appendChild(weekIcon)
    const week = document.createElement('button')
    week.classList.add("week")
    week.textContent = "Week"
    dashboardWeek.appendChild(week)

}