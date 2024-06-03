#! /usr/bin/env node
import inquirer from "inquirer";

class Student{
    name : string 
    constructor(name:string){
        this.name = name
    }
}
class Person{
    students : Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const program = async (persons : Person) => {

    do{
    console.log("\n *** Welcome *** \n");
    const ans = await inquirer.prompt(
        [
            {
                name: "select",
                type: "list",
                message: "What Would You Like To Select??",
                choices: ["staff" , "student" , "exit"]
            }
        ]
    )

    if(ans.select === "staff"){
         console.log("You Approch The Staff Room.");
    }
    else if(ans.select === "student"){
        const ans = await inquirer.prompt(
            [
                {
                    name: "student",
                    type: "input",
                    message: "Enter Student's name you Want To Engage:"
                }
            ]
        )
        const student = persons.students.find(val => val.name == ans.student)
        
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`\nHello My Name is ${name.name}. Nice to Meet you..!!`);
            console.log("\n*** New Student Added ***");
            console.log("\nCurrent Student list:\n");
            console.log(persons.students);
        }
        else{
            console.log(`\nHello i'm ${student.name}. Nice to Meet You Again!!`);
            console.log("\n*** Existing Program ***\n");
            console.log(persons.students);
        }
    }
    else if(ans.select === "exit"){
        console.log("Existing The Program !!!");
        process.exit();
}
  } while(true);
}
program(persons);