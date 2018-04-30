//VERSION 1

    //save items to a list
var todo = ["item 1", "item 2", "item 3"];

    //add to the list
todo.push("item 4");

    //update items on the list
todo[0] = "item 1 updated";

    //remove items from the list
todo.splice(0,1);


//VERSION 2

function displayTodos(){
    console.log("My todos:", todos);
}

function addTodo(item){
    todos.push(item);
    displayTodos();
}

function changeTodo(position, newValue){
    todo[position] = newValue;
    displayTodos();
}

function deleteTodo(position){
    todo.splice(position, 1)
    displayTodos();
}