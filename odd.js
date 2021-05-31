//Question :2 
//Print odd numbers in an array.
const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  
var arr2=[];
var arr1=[2,4,6,8,2,1,3,5,7];
var res = function(arr1)
{
    for(i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2 !== 0)
        {
            arr2.push(arr1[i]);
                    }
    }
    return arr2;
}
 console.log(res(arr1));
});
