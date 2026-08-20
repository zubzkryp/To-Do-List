import './header.css'

export default function buildHeader() {
    const content = document.querySelector('#content')
    const header = document.createElement('div')
    header.classList.add('header') 
    content.appendChild(header)
    const title = document.createElement('div')
    title.classList.add("header-title")
    header.appendChild(title)
    header.textContent = " ToDo List"

}