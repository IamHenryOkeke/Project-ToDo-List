let myItemArray = [
    {task : "Book Reading", 
    description : "Read Chimamanda Adiche's book",
    dueDate : "10/10/2022",
    priority : "High"}
];

const todoContainer = document.getElementById("todoContainer");

const submitBTN = document.getElementById("submit");

const addNewBTN = document.getElementById("add-item");

const formContainer = document.getElementById("form-container");

const cancelBTN = document.getElementById("cancel");

class MyTasks{
    constructor(task, description, dueDate, priority){
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority 
    }
}

function createItemCard(item, index){
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute('id','card-items');
    cardContainer.setAttribute('data-index',index)
    let taskTitle = document.createElement("h3");
    taskTitle.innerText =  `${item.task}`;
    let description = document.createElement("h3");
    description.innerText =  `${item.description}`;
    let dueDate = document.createElement("h4");
    dueDate.innerText =  `${item.dueDate}`;
    let priority = document.createElement("button");
    priority.setAttribute("id","checked")
    priority.innerText =  `${item.priority}`;
    let deleteButton = document.createElement('input');
    deleteButton.setAttribute('class', 'Dbtn')
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    function deleteFunc() {
        todoContainer.removeChild(cardContainer);
    }
    deleteButton.onclick = deleteFunc.bind(this);
    cardContainer.appendChild(taskTitle);
    cardContainer.appendChild(description);
    cardContainer.appendChild(dueDate);
    cardContainer.appendChild(priority);
    cardContainer.appendChild(deleteButton)
    todoContainer.appendChild(cardContainer);
}

function createObj(){
    let taskInput = document.getElementById("name").value;
    let descriptionInput = document.getElementById("description").value;
    let dateInput = document.getElementById("due-date").value;
    let priorityInput = document.getElementById("priority").value;
    const newBook = new MyTasks(taskInput, descriptionInput, dateInput, priorityInput);
    newBook.task = `"${taskInput}"`;
    newBook.description = `${descriptionInput}`;
    newBook.dueDate = `${dateInput}`;
    newBook.priority = priorityInput;
    return newBook
}

function addToMyItemArray(item){
    myItemArray.push(item);
}

function displayLibrary(){
    let index = myItemArray.length-1
    createItemCard(myItemArray[index], index)        
}

const removeForm = () => {
    formContainer.style.display = "none";
    addNewBTN.style.display = "block";
}

addNewBTN.addEventListener("click", function(){
    formContainer.style.display = "block";
    addNewBTN.style.display = "none";
})

cancelBTN.addEventListener("click",removeForm);

submitBTN.addEventListener("click", function(){
    let newObject = createObj()
    addToMyItemArray(newObject);
    removeForm();
    displayLibrary();
})

displayLibrary()
