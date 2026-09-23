import { isEqual } from "date-fns";
import { format } from "date-fns";
import { isWithinInterval } from "date-fns";
import { addDays } from "date-fns";
import Project from "./Project";


export function filterToday(project) {
    const currentDate = format(new Date(), 'yyyy-MM-dd') // Date for today
   
    const today = project.tasks.filter((element) => // We filter out the elements that are false and not equal to the current Date therefore its not due today.
        isEqual(element.date, currentDate) )

    return today
  
}

export function filterWeek(project) {
    const currentDate = format(new Date(), 'yyyy-MM-dd')

    const week = project.tasks.filter((element) => {
       return isWithinInterval(element.date, {start : currentDate, end : addDays(currentDate, 7) } )
    })

    Window.week = week
    return week
}