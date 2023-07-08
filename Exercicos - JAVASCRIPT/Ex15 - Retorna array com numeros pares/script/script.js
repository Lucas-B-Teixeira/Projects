
//ver no console log do google
function retornaPares(num){

  var result = [];

  for (let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
      result.push(num[i]);
    }
  }

  return result;
}  
