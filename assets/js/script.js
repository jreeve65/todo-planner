// Retrieve tasks and nextId from localStorage

let nextId = JSON.parse(localStorage.getItem("nextId")); //for deletion I assume?
//query selectors
const taskDateInput = $("#datepicker");
const taskTitleInput = $("#taskTitleFormControl1");
const taskDiscripInput = $("#taskDiscriptionFormControl1");
// array do I even need this????
function readProjectsFromStorage(){
  // creates variable to parse information in local storage 
  let taskList = JSON.parse(localStorage.getItem("tasks"));
  // if local storage currently has nothing in it create an empty array in local storage
  if(!taskList) {
    taskList =[];
  }
  //return local storage reference so one can use it as a variable in later functions
  return taskList;
}

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const card =$('<div>').addClass('task-card daggable my-4').attr('')

  //create a master element with the class of card
  // fill out elements of new card class with info from local storage
  //pin card to to do list
  // col.append(cardToAdd,cardBody,cardBodyHeader);
  // createTaskCard(taskList);  

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Handles the creation of a new task and stores the task in local storage why does the modal form save the info from the previous task?
function handleAddTask(event){
  // event.preventDefault();
  if(taskDate.val().trim() === "" || taskTitle.val().trim() ===""| taskDiscrip.val().trim() ==="") {
    console.log("fill out all fields please");
    return;
  }
  const newTask = {
    date: taskDateInput.val(),
    title: taskTitleInput.val(),
    discription: taskDiscripInput.val(),
  }
  
  toDoList.push(newTask);
  localStorage.setItem("tasks",JSON.stringify(toDoList));
  // localStorage.setItem("tasks",JSON.stringify(newTask));
  createTaskCard(taskList);

  
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  //date picker
$( function() {
  $( "#datepicker" ).datepicker();
} );

// event listener
$("#newTask").click(handleAddTask);


});


