import './content.css'


export default function buildContent() {
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




}

