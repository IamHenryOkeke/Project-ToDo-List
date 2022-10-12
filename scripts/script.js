const bookContainer = document.getElementById("bookContainer");

const submitBTN = document.getElementById("submit");

const addNewBTN = document.getElementById("add-item");

const formContainer = document.getElementById("form-container");

const cancelBTN = document.getElementById("cancel");

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
    addToMyBookLibrary(newObject);
    removeForm();
    displayLibrary();
})