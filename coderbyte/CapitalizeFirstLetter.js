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