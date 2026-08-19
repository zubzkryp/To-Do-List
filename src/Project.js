class Project {
    constructor() {
        this.tasks = []
    }

    add(desc, date) {
        const newTask = new ToDo(desc, date)
        this.tasks.push(newTask)
    }

    remove(obj) {
        let index = this.tasks.indexOf(obj)
        if (index > -1){
            this.tasks.splice(index, 1)
        }
    }
}


