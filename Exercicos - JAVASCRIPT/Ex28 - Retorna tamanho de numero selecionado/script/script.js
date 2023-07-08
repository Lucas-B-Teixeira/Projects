
//ver no console log do google
function retornaNum(num, selec){

  let result = [];


  for(let i = 0; i < num.length; i++){
    if(num[i].toString().length == selec){
      result.push(num[i]);
    }
  }

  return result;
} 


