import './header.css'

export default function buildHeader() {
    const container = document.querySelector('#container')
    const header = document.createElement('div')
    header.classList.add('header') 
    container.appendChild(header)
    const title = document.createElement('div')
    title.classList.add("header-title")
    header.appendChild(title)
    title.textContent = " ToDo List"

    const leftCorner = document.create

}