
//ver no console log do google
function retornaPreco(obj){

  let result = 0;

  for(let i = 0; i < obj.length; i++){
    result = result + obj[i].preco;
  }

   return result;
}  
