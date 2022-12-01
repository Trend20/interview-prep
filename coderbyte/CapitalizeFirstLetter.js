// Capitalize the first letter of each word in a given string

const CapitalizeFirstLetter = (str) =>{
   const resultStrArr = str.split(" ");
   for(let i = 0; i< resultStrArr.length; i++){
      let item = resultStrArr[i]
      let firstCharLetter = item.charAt(0).toUpperCase()
      let consequesntLetter = item.substring(1).toLowerCase();
      return (firstCharLetter + consequesntLetter).join(" ");
   }
}

/*
QUESITON:
Have the function LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. Words will be separated by only one space. 
*/

function LetterCapitalize(str){

   let genArr = str.split(" ");

   // loop the array
   for(let i = 0; i<genArr.length; i++){

      let word = genArr[i].split("");
      word[0] = word[0].toUpperCase();
      genArr[i] = word.join("")
   }

   return genArr.join(" ");
}

// keep this function call here
LetterCapitalize(readline());