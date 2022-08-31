const formInput = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const todoEl = document.querySelector(".todos");
const todoForm = document.querySelector("form");
const clearBtn = document.querySelector(".all");

// SHOW TASK
const showTask = (e) => {
  e.preventDefault();
  let newItem = document.createElement("li");
  let delIcon = document.createElement("button");
  let editIcon = document.createElement("button");
  let btnDiv = document.createElement("div");

  newItem.classList.add("todo-child");
  btnDiv.classList.add("btns");
  delIcon.classList.add("del-btn");
  editIcon.classList.add("edit-btn");
  delIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  editIcon.innerHTML = ` <i class="fas fa-edit"></i>`;

  if (formInput.value !== "") {
    newItem.textContent = formInput.value;
    newItem.appendChild(btnDiv);
    btnDiv.appendChild(editIcon);
    btnDiv.appendChild(delIcon);
    todoEl.appendChild(newItem);
  }
  if (formInput.value === "") {
    alert("You have'nt enter any task!!!");
  }

  todoForm.reset();

  // DELETE TASK
  delIcon.addEventListener("click", deleteTodo);
  function deleteTodo() {
    let delet = confirm("Are you sure?");
    if (delet == true) {
      let parent = this.parentNode.parentNode;
      parent.remove();
    }
  }

  // EDIT BUTTON
  // EDIT BUTTON
  // EDIT BUTTON

  editIcon.addEventListener("click", editTodo);
  function editTodo() {
    todoForm.reset();
    formInput.value = newItem.textContent;
    formInput.focus();
    let parent = this.parentNode.parentNode;
    parent.remove();
    // tasksObj.splice(index, 1);
    // localStorage.setItem("tasks", JSON.stringify(tasksObj));
    // showTask();
  }
};

addBtn.addEventListener("click", showTask);

// CLEAR ALL BUTTON
clearBtn.addEventListener("click", clearAll);

function clearAll() {
  let clearAll = confirm("Delete All?");
  if (clearAll == true) {
    todoEl.innerHTML = "";
  }
}
