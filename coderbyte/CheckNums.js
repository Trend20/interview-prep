/*
QUESTION:
Have the function CheckNums(num1,num2) take both parameters being passed and 
return the string true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1.
*/
const CheckNums = (num1, num2) =>{
  if(num1 < num2){
    return true;
  }else if(num1 > num2){
    return false;
  }

  return -1;

  // can also be done in a single line of code
  // return (num1 === num2)? -1: (num1 < num2);
}

CheckNums(readline());