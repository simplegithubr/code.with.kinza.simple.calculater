#! /user/bin /evn node

import inquirer from "inquirer";
//printing a wellcome message
console.log("\n\twellcome to \ 'codewithsagar\' -cli simple calculator\n");
//asking question from users though inquirer

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perfom action",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multipilaction","Division"],
  },
]);
//console.log(answers);
 if(answer.operator ==="Addition"){
   console.log(answer.firstNumber + answer.secondNumber);
 }else if(answer.operator ==="Subtraction"){
   console.log(answer.firstNumber - answer.secondNumber);
 }else if(answer.operator ==="Multipilaction"){
   console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator ==="Division"){
  console.log(answer.firstNumber / answer.secondNumber);
 }
 else{"please select correct operator"}