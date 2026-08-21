import './content.css'
import renderTasks from './renderTasks'


export default function buildContent(inbox) {
    const content = document.querySelector('#content')
    const contentaddTask = document.createElement('div')
    contentaddTask.classList.add('content-addtask')
    content.appendChild(contentaddTask)
  
    const addTaskbtn = document.createElement('button')
    addTaskbtn.classList.add('add-task')

    addTaskbtn.textContent = ' + Add task'
    contentaddTask.appendChild(addTaskbtn)

    addTaskbtn.setAttribute('command', "show-modal")
    addTaskbtn.setAttribute('commandfor', 'my-dialog')

    const dialog = document.createElement('dialog')
    dialog.id = "my-dialog"
    content.appendChild(dialog)

    const form = document.createElement('form')
    form.classList.add('form')
    form.action = '#'
    form.method = 'post'
    dialog.appendChild(form)

    // creating description text for task
    const descriptionHolder = document.createElement('div')
    descriptionHolder.classList.add('descriptionHolder')
    const descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'Description'
    descriptionLabel.textContent = 'Description'
    const descInput = document.createElement('input')
    descInput.id = 'Description'
    descInput.type = 'text'
    descInput.placeholder = "Description of your task"
    descInput.name = 'inputDesc'

    // date creation
    const dateHolder = document.createElement('div')
    dateHolder.classList.add('dateHolder')
    const dateLabel = document.createElement('label')
    dateLabel.htmlFor = 'Date'
    dateLabel.textContent = 'Date'
    const dateInput = document.createElement('input')
    dateInput.id = 'Date'
    dateInput.type = "date"
    dateInput.name = 'inputDate'
    
    descriptionHolder.appendChild(descriptionLabel)
    descriptionHolder.appendChild(descInput)
    
    dateHolder.appendChild(dateLabel)
    dateHolder.appendChild(dateInput)

    form.appendChild(descriptionHolder)
    form.appendChild(dateHolder)

    // submitting the form button
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.classList.add('submit-button')
    submitBtn.textContent = "Submit"
    form.appendChild(submitBtn)

    const closeformBTN = document.createElement('button')
    closeformBTN.setAttribute('command', "close")
    closeformBTN.setAttribute('commandfor', 'my-dialog')
    form.appendChild(closeformBTN)
    closeformBTN.classList.add('close-form')
    closeformBTN.textContent = "Close"
    closeformBTN.type = "button"



    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const description = document.querySelector('#Description').value
        const date = document.querySelector('#Date').value

        inbox.add(description, date)
        renderTasks(inbox.tasks)
        
    })

    const printsTasks = document.createElement('div')
    printsTasks.classList.add('print-tasks')
    content.appendChild(printsTasks)
}



