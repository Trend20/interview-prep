/*
QUESTION:
Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000. 
*/

function SimpleAdding(num) {
  return parseInt(num*(num+1)/2); //in case of floating point
}

// keep this function call here
SimpleAdding(readline());


// OR
function simpleSum(num){
  let sum;
  for(let i = 1; i<=num; i++){
    sum+= i;
  }
  console.log(sum);
}

simpleSum(4)
// output: 10