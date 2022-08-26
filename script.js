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

  newItem.classList.add("todo-child");
  delIcon.classList.add("del-btn");
  delIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  if (formInput.value !== "") {
    newItem.textContent = formInput.value;
    newItem.appendChild(delIcon);
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
      let parent = this.parentNode;
      parent.remove();
    }
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
