// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId")); //for deletion I assume?
//query selectors
const taskDate = $("#datepicker");
const taskTitle = $("#taskTitleFormControl1");
const taskDiscrip = $("#taskDiscriptionFormControl1");
// array do I even need this????
// const toDoList = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
  //read data from local storage
  const col = $("#todo-cards");
  const cardToAdd = $("<section></section>");
  const cardBody =$("<div></div>");
  const cardBodyHeader=$("<h4></h4>")
  cardToAdd.addClass("card");
  cardBody.addClass("card-body");
  cardBodyHeader.addClass("card-title");
  cardBodyHeader.text(task.taskTitle);
  //create a master element with the class of card
  // fill out elements of new card class with info from local storage
  //pin card to to do list
  col.after(cardToAdd,cardBody,cardBody);
  createTaskCard(taskList);  

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
    date: taskDate.val(),
    title: taskTitle.val(),
    discription: taskDiscrip.val(),
  }
  
  // toDoList.push(newTask);
  // localStorage.setItem("tasks",JSON.stringify(toDoList));
  localStorage.setItem("tasks",JSON.stringify(newTask));
  
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


