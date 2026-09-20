import './renderTasks.css'
import ifOverdue from './overdue'

export default function renderTasks(project) {
    const content = document.querySelector('#content')
    const printTasks = document.querySelector('.print-tasks')
    printTasks.textContent = ''

    project.tasks.forEach((element) => {
        // Create Taskcard which will store the description of the task and date
        
        const taskCard = document.createElement('div')
        taskCard.classList.add("task-card")
        printTasks.appendChild(taskCard)

      

        const descriptor = document.createElement('div')
        descriptor.classList.add('descriptor-task')
        const dateTask = document.createElement('div')
        dateTask.classList.add('date-task')
        const checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.required = 'true'
        checkbox.type = 'checkbox'
        checkbox.checked = element.completion
        const closeTaskBtn = document.createElement('button')
        closeTaskBtn.classList.add('close-task')

        checkbox.addEventListener("change", (e) => {
            console.log('checkbox clicked', element)
            element.completed() // Flips completion from true to false
            project.remove(element) // We remove it from the array
            renderTasks(project)  // We then call it again to show the new array
            
        })

        closeTaskBtn.addEventListener('click', (e) => {
            project.remove(element)
            renderTasks(project)
        })

        if(ifOverdue(element.date)) {
            taskCard.style.color = 'red'
        }


        descriptor.textContent = element.desc 
        dateTask.textContent = element.date
        closeTaskBtn.textContent = 'x'
        
        taskCard.appendChild(checkbox)
        taskCard.appendChild(descriptor)
        taskCard.appendChild(dateTask)
        taskCard.appendChild(closeTaskBtn)

    });
}