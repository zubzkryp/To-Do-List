export default function overdue(date) {
    const currentDate = new Date()
    if(currentDate > date) {
        return true
    }
    else {
        return false
    }
}