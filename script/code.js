//Answers Q1
/*
 >Variable : A variable is a container that can hold different values and be used in a program to store and manipulate data, and can only be accessed using the name they are given during declaration.

 >Value : A value is data that can be stored in a variable or used in a program.

 >Data type :A data type defines the kind of data that can be stored in a variable, specifying the possible values and the operations that can be performed on it.

 >Initialization : Declaring and assigning a value to a variable at the same time.

 >Difference between var, let and const : var has function scope, let has block scope and allows reassignment but no redeclaration, while const has block scope and creates a read-only constant variable.

 >What is a variable scope : the area in which a variable is visible, accessable and can be manipulated

 >When can you decide when to use a for or while, forEach and do while loop? : FOR is for when you know the number of iterations or want to iterate over a certain range 

 >Define hoisting and variable scoping? : Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.
 Variable scoping refers to the visibility and accessibility of variables in different parts of a program. 

 How to create a function called fullName that returns your full name and displays it
on the console.

function fullName(){
    let fName="Kamvelihle Sikalana";
    console.log(fName);
    return fName;
}
*/ 

// Answer Q2

// let student={
//     firstName:"Mamboyi",
//     lastName:"Bhokhwe",
//     age: 43,
//     subjects:["Maths","IT","Physics"]
// }
// let address={
//     streetName:"Imam Haron Rd",
//     streetNum:"1274",
//     suburb: "Lansdowne",
//     city: "Cape Town",
//     country:"South Africa"
// }
// console.log(student);
// console.log( address);

//Answer of Q3
// let num1=document.querySelector('#number1')
// let num2=document.querySelector('#number2')
// let op=document.querySelector('#operator') 
// let result=document.querySelector('#lblResult')


// function calculate() {
   
//    if (op.value =="+") {
        
//         result.innerText= 'Result : ' + eval(num1.value +op.value+ num2.value)
                  
//     }else if (op.value =="-") {
//         result.innerText='Result : ' + eval(num1.value - num2.value)
                
//     }else if (op.value =="/") {
        
//         result.innerText='Result : ' + eval(num1.value/num2.value).toFixed(2)
            
//     }else if (op.value =="*") {
        
//         result.innerText='Result : ' + eval(num1.value*num2.value)
            
//     }else if (op.value =="^") {
        
//         result.innerText='Result : ' + eval(Math.pow( num1.value,num2.value))
        
//     }  
    
// }

// function valid(x) {
//     switch (true) {
//         case document.querySelector(x).value.length ==0 :
//             alert('Please enter a number');
//             document.querySelector(x).value=" ";
//             break;
//         case isNaN(document.querySelector(x).value):
//             alert('Please enter a number');
//             document.querySelector(x).value=" ";
//             break;
//         case document.querySelector(x).value.length ==0 :
//             alert('Please enter an operator');
//             document.querySelector(x).value=" ";
//             break;
//     }
// }

// Answer Q4
// let nm="programming";
// let nm2=""
// for (let  index = nm.length-1;index >=0; index--) {
//  nm2+=nm[index]   
// }
// console.log(nm2);


//Answer Q5
// let people=[person1={
//     Name: "John",
//     dob:new Date("1973-04-15")
// },
//  person2={
//     Name: "Marko",
//     dob: new Date("1988-01-26")
// }
// ]
// //Current date
// let bdy=new Date()
// //Birthdays next year
// let nextBday1=new Date("2024-04-15")
// let nextBday2=new Date("2024-01-26")
// //Difference in days
// let dif1 =Math.floor((nextBday1.getTime()-bdy.getTime())/(1000 * 60 * 60 * 24))
// let dif2 = Math.floor((nextBday2.getTime()-bdy.getTime())/(1000 * 60 * 60 * 24))
// //Display
// console.log(`${people[0].Name }'s age is ${eval(2023-people[0].dob.getFullYear())} days until next birthday ${dif1}`);
// console.log(`${people[1].Name }'s age is ${eval(2023-people[1].dob.getFullYear())} days until next birthday ${dif2}`);

//Answer Q6
let marks=prompt("Enter your marks in % : ")
switch (true) {
    case marks=="100":
        console.log(`${marks}: You're amazing`);
        break;

    case marks>="90" && marks<="99":
        console.log(`${marks}: Well done`);
        break;

    case marks>="80" && marks<="89":
        console.log(`${marks}: Way to go`);
        break;

    case marks>="75" && marks<="79":
        console.log(`${marks}:Keep it up`);
        break;
    case marks>="60" && marks<="74":
            console.log(`${marks}: You did good`);
            break;
    
    case marks>="50" && marks<="59":
            console.log(`${marks}: That was good`);
            break; 
    case marks<"50":
        console.log(`${marks}: You failed`);
        break;

}   