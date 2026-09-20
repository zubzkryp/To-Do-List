import { format } from "date-fns";
import { compareAsc } from "date-fns";


export default function ifOverdue(date) {
    const currentDate = format(new Date(), 'yyyy-MM-dd') 
    // if(currentDate > date) {
    //     return true //overdue
    // }
    // else {
    //     return false
    // }

    const result = compareAsc(date, currentDate)
    const overdue = 1
    if(result == overdue) {
        return true
    }
    else {
        return false
    }
}

