// import inquirer from "inquirer";

// let todos = [];
// let codition = true;

// let addTask = inquirer.prompt([
//     {
//         name: "todo",
//         type: "input",
//         message: "What you want to add in your ToDos?",
//     },
//     {
//         name: "addMore",
//         type: "confirm",
//         message: "Would you like to add more?",
//         default: "false",
//     }
// ]);
// todos.push (addTask.todo);
// condition = addTask.addMore;
// console.log(todos);

import inquirer from "inquirer";

async function addTodo() {
  let todos = [];

  while (true) {
    const addTask = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: "What do you want to add to your to-do list? : ",
      },
      {
        name: "addMore",
        type: "confirm",
        message: "Would you like to add more? : ",
        default: "false",
      },
    ]);

    todos.push(addTask.todo);

    if (!addTask.addMore) {
      break;
    }
  }

  console.log("Your to-do list:");
  console.log(todos.join("\n"));
}

addTodo();