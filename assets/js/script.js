// Retrieve tasks and nextId from localStorage

let nextId = JSON.parse(localStorage.getItem("nextId")); //for deletion I assume?
//query selectors
const taskDateInput = $("#datepicker");
const taskTitleInput = $("#taskTitleFormControl1");
const taskDiscripInput = $("#taskDiscriptionFormControl1");
// array do I even need this????
function readProjectsFromStorage() {
  // creates variable to parse information in local storage 
  let taskList = JSON.parse(localStorage.getItem("tasks"));
  // if local storage currently has nothing in it create an empty array in local storage
  if (!taskList) {
    taskList = [];
  }
  //return local storage reference so one can use it as a variable in later functions
  return taskList;
}

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const card = $('<div>').addClass('task-card draggable my-4'); // refer to mini projcet solution still need to add id to this
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDiscript = $('<p>').addClass('card-text').text(task.discription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.date);
  const cardDeleteBtn = $('<button>').addClass('btn btn-danger delete').text('Delete').attr('data-task-id', task.id); //task id is generated with math. random
  cardDeleteBtn.on('click', handleDeleteTask);

  //conditionals for different style cards based on due date


  //pin card to to do list
  cardBody.append(cardDueDate, cardDiscript, cardDeleteBtn);
  card.append(cardHeader, cardBody);
  return card;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  //read local storage data
  const taskList = readProjectsFromStorage();
  const toDoList = $('#todo-cards');
  const inProgressList = $('#in-progress-cards');
  const doneList = $('#done-cards');
  toDoList.empty();
  inProgressList.empty();
  doneList.empty();

  // iterate over local storage and create cards each iteration needs to check the status of the data so that it renders the card in the proper spot.
  for (const task of taskList) {
    if (task.status === 'to-do') {
      toDoList.append(createTaskCard(task));
    }
    else if (task.status === 'in-progress') {
      inProgressList.append(createTaskCard(task));
    }
    else if (task.status === 'done') {
      doneList.append(createTaskCard(task));
    }

  }

}

// Handles the creation of a new task and stores the task in local storage why does the modal form save the info from the previous task?
function handleAddTask(event) {
  // event.preventDefault();
  if (taskDateInput.val().trim() === "" || taskTitleInput.val().trim() === "" | taskDiscripInput.val().trim() === "") {
    console.log("fill out all fields please");
    return;
  }
  const newTask = {
    id: crypto.randomUUID(),
    date: taskDateInput.val(),
    title: taskTitleInput.val(),
    discription: taskDiscripInput.val(),
    status: "to-do",
  }

  const taskList = readProjectsFromStorage();
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
  taskDateInput.val('');
  taskTitleInput.val('');
  taskDiscripInput.val('');


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  const taskList = readProjectsFromStorage();
  const taskId =$(this).attr('data-task-id');
  for(let i =0; i< taskList.length;i++) {
    if(taskList[i].id === taskId){
      taskList.splice(taskList[i],1);
    }
  }
  localStorage.setItem("tasks",JSON.stringify(taskList));  
  renderTaskList();


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  //date picker
  $(function () {
    $("#datepicker").datepicker();
  });

  // event listener
  $("#newTask").click(handleAddTask);

  renderTaskList();


});


