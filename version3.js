var todoList = {

    todos : ["item 1", "item 2", "item 3"],

    displayTodos: function(){
        console.log("My todos:", this.todos);
    },
    
    addTodo: function(item){
        this.todos.push(item);
        this.displayTodos();
    },
    
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    
    deleteTodo: function(position){
        this.todo.splice(position, 1)
        this.displayTodos();
    }
}

todoList.addTodo("item 4");
todoList.changeTodo(0, "item 1 changed");