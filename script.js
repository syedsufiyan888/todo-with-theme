let textInput = document.querySelector(".textInput")
let addbtn = document.querySelector(".add-btn");
let todoList = document.querySelector(".todo-List");

addbtn.addEventListener("click",updateList);
function updateList(){
    //not taking any empty spaces as add task
    if(textInput.value.trim()===""){
        textInput.value='';
        return;
    }
    //creating li after removing empty spaces.
    let task = textInput.value.trim();
    let listItem = document.createElement("li");

    //storing inputted text in the li
    listItem.textContent = task;
    //adding child to the unordered list
    todoList.appendChild(listItem);
    listItem.innerHTML = `<span>${task}</span><button class="dlt-btn">X</button><br>`;
    // setting the textInput value to none after adding the task
    textInput.value='';
    
    let deletebtn = listItem.querySelector(".dlt-btn");
    deletebtn.addEventListener("click", deletefn);
}
function deletefn(event){
    event.stopPropagation();
    const li = this.parentElement;
    todoList.removeChild(li);
}
// Dark-Theme
let theme = document.querySelector(".themebtn")
let isDark = false;
theme.addEventListener("click",()=>{
    if(!isDark){
        document.body.style="background-color: rgba(0, 0, 0, 0.819);color: rgb(255, 255, 255);";
        theme.textContent = `light theme`;
    }else{
        document.body.style="background-color: white;color: black;";
        theme.textContent = `Dark theme`;
    }
    isDark=!isDark;
});
