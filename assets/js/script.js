// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
//query selectors
const taskDate = $("#datePicker");
const taskTitle = $("#taskTitleFormControl1");
const taskDiscrip = $("#taskDiscriptionFormControl1");
// array 
const toDoList = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  // event.preventDefault();
  if(taskDate === "".trim() || taskTitle ==="".trim() || taskDiscrip ==="".trim()) {
    console.log("fill out all fields please");
    return;
  }
  const newTask = {
    date: taskDate.val(),
    title: taskTitle.val(),
    discription: taskDiscrip.val(),
  }
  
  toDoList.push(newTask);
  console.log(toDoList);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

//date picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );

// event listener
$("#newTask").click(handleAddTask);


