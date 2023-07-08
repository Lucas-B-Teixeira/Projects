
//ver no console log do google
function retornaPalavra(palavra, array){
  
  let result = [];

   for(let i = 0; i < array.length; i++){
    for(let j = 0; j < palavra.length; j++){
      if (palavra.charAt(j) == array[i][j]){
        if(result.includes(array[i]) == false){
          result.push(array[i]);
        }    
     }
    }
  }

  return result;
  
}  
