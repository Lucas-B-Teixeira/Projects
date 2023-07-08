
//ver no console log do google
function retornaInverte(obj){

  let result;

  let inverte = [];

  result = Object.entries(obj);

  for(let i = 0; i < result.length; i++){
    inverte.push(result[i].reverse());
  }

  return inverte;
} 


