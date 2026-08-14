import './header.css'

export default function buildHeader() {
    const header = document.querySelector('#header')
    const title = document.createElement('div')
    title.classList.add("header-title")
    header.appendChild(title)
    title.textContent = " ToDo List"


}