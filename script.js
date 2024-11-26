let textInput = document.querySelector(".textInput");
let addbtn = document.querySelector(".addBtn");
let todolist = document.querySelector(".todolist");
let arTodo = JSON.parse(localStorage.getItem("items") || "[]");

arTodo.forEach(task => {
    addToDOM(task);
});

addbtn.addEventListener("click", updateList);

function updateList() {
    if (textInput.value.trim() === "") {
        textInput.value = "";
        return;
    }

    let task = textInput.value.trim();
    arTodo.push(task);
    addToDOM(task);
    saveToLocalStorage();
    textInput.value = ""; // Clear the input field
}

function addToDOM(task) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<span>${task}</span><button class="dlt-btn">X</button><br>`;
    todolist.appendChild(listItem);

    let deletebtn = listItem.querySelector(".dlt-btn");
    deletebtn.addEventListener("click", deletefn);
}

function deletefn(event) {
    event.stopPropagation();
    const li = event.target.parentElement;
    const task = li.querySelector("span").textContent;

    todolist.removeChild(li);

    const index = arTodo.indexOf(task);
    if (index > -1) {
        arTodo.splice(index, 1);
    }

    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(arTodo));
}

// Task completion (toggle strikethrough)
todolist.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("li-text-strike");
    }
});

// Theme toggle
let theme = document.querySelector(".themebtn");
theme.addEventListener("click", () => {
    document.body.classList.toggle("themechange");
    let listItems = document.querySelectorAll("ul li");
    listItems.forEach(item => {
        item.classList.toggle("litheme");
    });
    let h2 = document.querySelector("h2");
    h2.classList.toggle("dark-theme-text");
    theme.textContent = theme.textContent === "Dark" ? "Light" : "Dark";
});
