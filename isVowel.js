"use strict";
/* eslint-disable*/
/**
 * 
 * @param {string} charc 
 * @returns {boolean} result. 
 */



function isVowel(charc){
let vowel="aeiou";

for(let i=0;i<vowel.length;i++){   //hello
   
       if (vowel[i]===charc){
           return true;
       

   }
}
return false;
}
console.log(isVowel("r"));



