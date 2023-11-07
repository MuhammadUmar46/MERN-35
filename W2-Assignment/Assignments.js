// Write a function which takes a parameter and prints the table of that number

let num = prompt("Enter Any Number") 

function NumberTable (num, limit = 10){
  for ( let i = 1; i <= limit; i++)
  {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`)
  }
}

// let num = 5;
NumberTable(num);



// Write a function to calculate factorial of a number

let num = prompt("Enter Any Number");

function FactorialFun(num) {
  if (num === 0) {
    return 1;
  }
  else{
    return num * FactorialFun(num - 1);
  }
}

// let num = 5;
const result = FactorialFun(num)
console.log(`The Factorial of ${num} is ${result}`);



// Write a function to check if a given number is prime

let num = 7 ;
let primeNum = 0;

for( let i = 0; i < num;  i++)
{
  if( num%2 == 0)
  {
    primeNum++;
    break;
  }
}
if(primeNum == 0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");



// Write a function to calculate the sum of numbers from 1 to a given parameter number

function SumOfNum(numbers){
    let sum = 0;
    for (let i = 0; i <= numbers; i++){
       sum += i;
    }
    return sum;
   }
   
   const numbers = 5;
   const result = SumOfNum(numbers)
   console.log(`The Sum of numbers from 1 to ${numbers} is ${result}`)



// find the minimum number in array

let Numbers = [4,1,9,5,0,10,15,-1,7];
let minimumNum = Numbers[0];

for(let i = 1; i < Numbers.length; i++){

    if(Numbers[i] < minimumNum){
        minimumNum = Numbers[i];   
    }
}

console.log(minimumNum);



// find the maximum number in array

function MaximumNum(Num) {  

    let max = Num[0]; 

    for (let i = 1; i < Num.length; i++) {
        if (Num[i] > max) 
            max = Num[i]; 
    } 
    return max; 
} 

let Num = [1, 5, 4, 9, 8,10,4,6,7];
let result = MaximumNum(Num)
console.log("Maximum Value in Array " + result);