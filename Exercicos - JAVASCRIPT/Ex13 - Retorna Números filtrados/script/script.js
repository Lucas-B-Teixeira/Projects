
//ver no console log do google
function retornaNum(num){

  let result = [];

  for(let i = 0; i <= num.length; i++){
    console.log(num.length);
    if (typeof num[i] == "number"){
      result.push(num[i]);
    }
  }

  return result;

}
