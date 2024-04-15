#! /usr/bin/env node
import inquirer from "inquirer"

let todoList = [];
let condition = true;

while (condition){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task : ",
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);
    
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task? ",
            default: false,
        }
    ])
    condition = addMoreTask.addmore;

}
console.log("Your updated Todo-List:" , todoList);