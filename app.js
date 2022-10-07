let a = "s"
let b = "3"


function aIsLetter(char) {
   if (typeof char !== 'string') {
      return false;
   }
   return char.toLowerCase() !== char.toUpperCase();
}
let aCheck = aIsLetter(a)
// console.log(aCheck);

function bIsLetter(charB) {
   if (typeof charB !== 'string') {
      return false;
   }
   return charB.toLowerCase() !== charB.toUpperCase();
}
let bCheck = bIsLetter(b)
// console.log(bCheck);

if (aCheck == false){
   console.log('-1');
} else if(bCheck == false){
   console.log('-1');
}else if (a.toUpperCase() === a && b.toUpperCase() === b){
   console.log('1');
} else if(a.toLowerCase() === a && b.toLowerCase() === b){
   console.log('1');
} else if (a.toLowerCase() === a && b.toUpperCase() === b){
   console.log('0');
} else if (a.toUpperCase() === a && b.toLowerCase() === b){
   console.log('0');
}