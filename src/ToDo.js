class ToDo {
    constructor(desc, date) {
        this.desc = desc
        this.completion = false
        this.date = date
    }

     completed() {
       this.completion = !this.completion
     }

       
}