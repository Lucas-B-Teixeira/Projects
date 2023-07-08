
//ver no console log do google
function retornaLetras(let, frase){

  let result = 0;

  for(let i = 0; i < frase.length; i++){
    if(frase[i] == let){
      result = result+1;
    }
  }

  return result;
  
}  
