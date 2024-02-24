const addTask = (taskInput) => {
    const li = document.createElement("li");
    li.textContent = taskInput; //sets the list item to take the taskInput (whatever in textarea) as the task to be made
    li.className = "task-item";

    //create a button to make it done
    const doneButton = document.createElement("button");
    //change style of created done button Stackoverflow the goat
    doneButton.textContent = "✓";
    doneButton.style.backgroundColor = "green";
    doneButton.style.color="white";
    doneButton.style.borderRadius="12px";
    doneButton.style.border="#F9F07A solid 2px";
    doneButton.style.justifyContent="right"

    doneButton.addEventListener("click", () => {
        li.classList.toggle("done");
    }); //if you click this button, the done class will be given to the task

    //create button for deleting stuff
    const deleteButton = document.createElement("button");
    //style the deleted button to be similar to the done one
    deleteButton.textContent = "X";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color="white";
    deleteButton.style.borderRadius="12px";
    deleteButton.style.border="#F9F07A solid 2px";
    
    deleteButton.addEventListener("click", () => {
        li.remove();
    }); //if you click this one the task is deleted

    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    document.getElementById("task-list").appendChild(li); //puts the li inside the task list dude
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let taskInput = document.getElementById("task-input").value.trim(); //gets the data from the textarea
    if (taskInput !== '') { //if textarea isnt empty then it runs the function addtask and sets the text area back to empty
        addTask(taskInput);
        document.getElementById("task-input").value = '';
    }
});

