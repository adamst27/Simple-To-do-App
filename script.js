let myInput = document.getElementById("task-field");
let mySubmitter = document.getElementById("submitter");
let myTasks = document.querySelector(".results"),
  myForm = document.querySelector("form");
let tasksArray = JSON.parse(window.localStorage.getItem("tasks")) || [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (myInput.value !== "") {
    tasksArray.push(myInput.value);
    window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
    displayTasks(); // Call the displayTasks function after adding a new task
    myInput.value = ""; // Clear the input field after adding a task
  }
});

function displayTasks() {
  myTasks.innerHTML = "";
  tasksArray.forEach((task, index) => {
    let storedTask = document.createElement("div");
    let remove = document.createElement("button");
    remove.classList.add("removing");
    remove.textContent = "Done";
    remove.onclick = function () {
      tasksArray.splice(index, 1);
      window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
      storedTask.remove();
    };
    storedTask.textContent = task;
    storedTask.appendChild(remove);
    myTasks.appendChild(storedTask);
    storedTask.style.cssText =
      "display: flex; flex-direction: row; justify-content: space-between";
  });
}

displayTasks();
