var todoList = {

    todos : [{todoText: "Sample Text", completed: false}],

    displayTodos: function(){
        console.log("My todos:", this.todos);
    },
    
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodo: function(position){
        this.todo.splice(position, 1)
        this.displayTodos();
    },

    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}

todoList.addTodo("First try");