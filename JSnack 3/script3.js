$(function(){
 console.log('ciao');

  var arrLettere = ['a','b','c','d','e','f','h','i'];
  var arrNumeri = [1,2,3,4,5,6,7,8,9];
  var arrFuso = [];

  var i = 0;

  while (arrLettere[i] != undefined && arrNumeri[i] != undefined) {
    arrFuso.push(arrLettere[i]);
    arrFuso.push(arrNumeri[i]);
    i++;
  }
  
  console.log(arrFuso);
});