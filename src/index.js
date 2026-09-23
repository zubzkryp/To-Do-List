import './styles.css'
import buildHeader from './header'
import buildSideBar from './sidebar';
import Project from './Project';
import ifOverdue from './overdue';
import buildContent from './content';
import { format } from "date-fns";


export const inbox = new Project();
window.inbox = inbox


buildHeader();
buildSideBar(inbox);
buildContent(inbox)


  const currentDate = format(new Date(), 'yyyy-MM-dd') 
  console.log(typeof currentDate)

const today = new Project

inbox.add("Wash dishes", currentDate )
// inbox.add("clean dog", new Date())
// today.add("clean laptop", new Date())
// today.remove(today.tasks[0])
// inbox.tasks[0].completed()
// inbox.tasks[0].completed()
console.log(ifOverdue(inbox.tasks[0].getDate()))
console.log(inbox)
const currentDate1 = new Date()
console.log(currentDate)

// console.log(today)