import './renderTasks.css'
import ifOverdue from './overdue'
import { inbox } from "./index.js";

export function renderTasks(tasks, project) {
    const content = document.querySelector('#content')
    const printTasks = document.querySelector('.print-tasks')
    printTasks.textContent = ''

    tasks.forEach((element) => {
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
            const index = tasks.indexOf(element) 
            tasks.splice(index, 1)// We remove it from the array
            project.remove(element)
            renderTasks(tasks)  // We then call it again to show the new array
            
        })

        closeTaskBtn.addEventListener('click', (e) => {
            const index = tasks.indexOf(element) 
            tasks.splice(index, 1)  
            project.remove(element)
            renderTasks(tasks)
            
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

