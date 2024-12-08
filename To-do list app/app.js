const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    // event key for perticular alphavet.
    addTodo(this.value); // this.value for input text after enter, this = item.
    this.value = ""; // for empty the input after enter
  }
});

const addTodo = (item) => {
  const listitem = document.createElement("li"); // crete list by js
  listitem.innerHTML = `${item}
            <i>❎</i>`;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });

  toDoBox.appendChild(listitem);
};
