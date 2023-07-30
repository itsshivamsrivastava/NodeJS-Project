/*
Project name: Todo-App
Technology used: Node.js
*/

// Take input from user
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Function to display menu
function menu() {
    // Menu Items
    console.log("\n~~ Menu ~~")
    console.log("1. Add Todo");
    console.log("2. Update Todo");
    console.log("3. Delete Todo");
    console.log("4. Read Todo");
    console.log("5. Exit");
    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                addTodo();
                break;
            case "2":
                updateTodo();
                break;
            case "3":
                deleteTodo();
                break;
            case "4":
                readTodo();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                menu();
        }
    });
}

// Function to add todo
const addTodo = () => {
    rl.question("Enter the todo: ", (todo) => {
        // Add todo to the file
        const fs = require("fs");
        fs.appendFile("todo.txt", todo + "\n", (err) => {
            if (err) {
                console.log("Error in adding todo");
            } else {
                console.log("Todo added successfully");
            }
            menu();
        });
    });
};

// Function to update todo
const updateTodo = () => {
    rl.question("Enter the todo to update: ", (todo) => {
        rl.question("Enter the updated todo: ", (updatedTodo) => {
            const fs = require("fs");
            fs.readFile("todo.txt", "utf-8", (err, data) => {
                if(err){
                    console.log("Error in updating todo");
                }
                else{
                    let todos = data. split("\n");
                    let index = todos.indexOf(todo);
                    todos[index] = updatedTodo;
                    let updatedTodos = todos.join("\n");
                    fs.writeFile("todo.txt", updatedTodos, (err) => {
                        if(err){
                            console.log("Error in update todo");
                        }
                        else{
                            console.log("Todo updated successfully");
                            menu();
                        }
                    })
                }
            })
        })
    });
};

// Function to delete todo
const deleteTodo = () => {
    const fs = require("fs");
    fs.readFile("todo.txt", "utf-8", (err, data) => {
        if(err){
            console.log("Error in deleting todo");
        }
        else{
            let todos = data. split("\n");
            for(let i = 0; i < todos.length; i++){
                console.log(`${i}. ${todos[i]}`);
            }
            rl.question("Enter the todo to delete: ", (todo) => {
                let index = todos.indexOf(todo);
                todos.splice(index, 1);
                let updatedTodos = todos.join("\n");
                fs.writeFile("todo.txt", updatedTodos, (err) => {
                    if(err){
                        console.log("Error in deleting todo");
                    }
                    else{
                        console.log("Todo deleted successfully");
                        menu();
                    }
                })
            })
        }
    });
};

// Function to read todo
const readTodo = () => {
    const fs = require("fs");
    fs.readFile("todo.txt", "utf-8", (err, data) => {
        if(err){
            console.log("Error in reading todo");
        }
        else{
            let todos = data. split("\n");
            for(let i = 0; i < todos.length; i++){
                console.log(`${i}. ${todos[i]}`);
            }
            menu();
        }
    })
};


// Call menu function
menu();