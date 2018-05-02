var todoList = {

    todos : [{todoText: "item 1", completed: false}, {todoText: "item 2", completed: false}, {todoText: "item 3", completed: false}],

    displayTodos: function(){
        console.log("My Todos:")
        if(this.todos.length === 0){
            console.log("Your todo list is empty!");
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText)
                }
            }
        }    
    },
    
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get the number of completed todos
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }

        // Case 1: If everything is true, make everything false (checked -> unchecked)
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }

        // Case 2: Make everything true (check everything)    
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll();
    },

    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ""; 
    },

    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },

    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },

    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    }
};