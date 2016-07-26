
function findLongestWord(str){
  var numArray = [];
  var newStr = str.split(' ')
  
    for(i=0; i<newStr.length; i++){
      numArray.push(newStr[i].length);
      var longest = Math.max.apply(Math,numArray);
    }return longest;
}

function titleCase(str){
  var newStr = str.toLowerCase().split(' ');

  for(i=0;i<newStr.length; i++){
    newStr[i]= newStr[i].split('');
    newStr[i][0]= newStr[i][0].toUpperCase();
    newStr[i]= newStr[i].join('');
  }
  return newStr.join(' ');
}

function largestOfFour(arr) {
 var onArr= [];
  for(i=0;i<arr.length;i++){
    onArr.push(Math.max.apply(Math, arr[i]));}
  return onArr;
}


function confirmEnding(str, target) {
  if(str.substring(str.length-target.length)===target){
    return true;
  }else {
    return false;
  }
}
// not 100% option below
// function confirmEnding(str, target) {
//   var endStr = str.split(' ');
//   var lastWord = endStr[endStr.length-1];
//   if(lastWord.includes(target)){
//     return true;
//   }else {
//     return false;
//   }
// }
function repeatStringNumTimes(str, num) {
  if(num>0){
   return str.repeat(num);
  }else {
   return "";
  }
}

function truncateString(str, num) {
  if (num <= 3) { return str.slice(0, num) + "..."; }
  else if (str.length > num) {
    return str.slice(0, num - 3) + "...";
  } else {
    return str;
   }
}

function chunkArrayInGroups(arr, size) {
  arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
   return arrays;
}

function slasher(arr, howMany) {
  return arr.slice(howMany);
}
