var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

var min = 4;
var max = 9;
var arrEmpty = arrayIn(alfabeto, min, max);

console.log(arrEmpty);

function arrayIn(arrlong,a,b){
  var arr = [];

  for(var i = a - 1; i < b - 1; i++){
    arr.push(arrlong[i]);
  }
   return arr;
}