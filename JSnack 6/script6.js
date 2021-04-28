var arrNum = [1,2,3,4,5,6,7,8,9];
var arrAlfa = ["A","B","C","D","E","F","G"];

while(arrNum.length < arrAlfa.length){
  var arrAggiuntivo = rdmNUm(0, 9);
  arrNum.push(arrAggiuntivo);
}

while(arrNum.length > arrAlfa.length){
  var arrAggiuntivo2 = rdmNUm(0, 9);
  arrAlfa.push(arrAggiuntivo2);
}


console.log(arrNum);
console.log(arrAlfa);


function rdmNUm(min,max){
  return Math.floor(Math.random()*(max - min +1)+ min);
}