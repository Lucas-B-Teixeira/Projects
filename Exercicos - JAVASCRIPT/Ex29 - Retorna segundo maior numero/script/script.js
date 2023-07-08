
//ver no console log do google
function retornaSegNum(arr){

  let numSeg;

  let number = arr.sort(function(a, b) {
    return a - b;
});

  numSeg = number[number.length - 2];

  return numSeg;

}
