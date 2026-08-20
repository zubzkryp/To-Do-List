import './renderTasks.css'

export default function renderTasks(tasks) {
    const content = document.querySelector('#content')
    const printTasks = document.querySelector('.print-tasks')

    tasks.forEach((element) => {
        // Create Taskcard which will store the description of the task and date
        const taskCard = document.createElement('div')
        printTasks.appendChild(taskCard)

        const descriptor = document.createElement('div')
        descriptor.classList.add('descriptor-task')
        const dateTask = document.createElement('div')
        dateTask.classList.add('date-task')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = element.completion
        const closeTaskBtn = document.createElement('button')
        closeTaskBtn.classList.add('close-task')


        descriptor.textContent = element.desc 
        dateTask.textContent = element.date
        
        taskCard.appendChild(checkbox)
        taskCard.appendChild(descriptor)
        taskCard.appendChild(dateTask)
        taskCard.appendChild(closeTaskBtn)

    });
}