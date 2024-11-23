let textInput = document.querySelector(".textInput")
let addbtn = document.querySelector(".add-btn");
let todolist = document.querySelector(".todolist");
let arTodo = [];

addbtn.addEventListener("click", updateList);
function updateList() {
    //not taking any empty spaces as add task
    if (textInput.value.trim() === "") {
        textInput.value = '';
        return;
    }
    //creating li after removing empty spaces.
    let task = textInput.value.trim();
    let listItem = document.createElement("li");

    //storing inputted text in the li
    listItem.textContent = task;
    //adding child to the unordered list
    todolist.appendChild(listItem);
    listItem.innerHTML = `<span>${task}</span><button class="dlt-btn">X</button><br>`;
    arTodo.push(listItem.textContent);
    console.log(arTodo);

    // setting the textInput value to none after adding the task
    textInput.value = '';

    let deletebtn = listItem.querySelector(".dlt-btn");
    deletebtn.addEventListener("click", deletefn);
}
function deletefn(event) {
    event.stopPropagation();
    const li = this.parentElement;
    todolist.removeChild(li);
}
//task-complete
todolist.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle('li-text-strike')
    };
})
let theme = document.querySelector(".themebtn")
theme.addEventListener("click", () => {
    document.body.classList.toggle('themechange');
    let listItems = document.querySelectorAll("ul li");
    listItems.forEach(item => {
        item.classList.toggle('litheme');
    });
    let h2 = document.querySelector('h2');
    h2.classList.toggle('dark-theme-text');
    if (theme.textContent === "Dark") {
        theme.textContent = "Light";
    } else {
        theme.textContent = "Dark";
    }
});


