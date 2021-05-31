//Sum of all numbers in an array
//project
const readline = require("readline");


const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

var arr= userInput[0].split(" ");

var sum=0;
//console.log(arr.length);

function abc(arr)
{
    for(i=0;i<arr.length;i++)
    {
        sum += +arr[i]

    }
    //var sum=arr.reduce(function(a,b){return a+b;},0);

   console.log(sum) }



// var array = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    //var sum = arr.reduce(function(a, b){ return a + b;  }, 0);
    
    console.log(abc(arr)); // Prints: 15

//console.log(arr.reduce((a, b) => a + b, 0) )

});

