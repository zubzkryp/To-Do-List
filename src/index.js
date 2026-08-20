import './styles.css'
import buildHeader from './header'
import buildSideBar from './sidebar';
import Project from './Project';
import ifOverdue from './overdue';
import buildContent from './content';

buildHeader();
buildSideBar();
buildContent()

const inbox = new Project();
const today = new Project

inbox.add("Wash dishes", new Date())
inbox.add("clean dog", new Date())
today.add("clean laptop", new Date())
today.remove(today.tasks[0])
inbox.tasks[0].completed()
inbox.tasks[0].completed()
console.log(ifOverdue(inbox.tasks[0].Date))
console.log(inbox)
console.log(today)