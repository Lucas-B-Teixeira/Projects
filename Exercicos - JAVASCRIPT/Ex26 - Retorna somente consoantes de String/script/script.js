
//ver no console log do google
function retornaConsoantes(palavra){

  let result = "";

  for(let i = 0; i < palavra.length; i++){
    if((palavra.toLowerCase().charAt(i) == "a") || (palavra.toLowerCase().charAt(i) == "e")  || (palavra.toLowerCase().charAt(i) == "i")  || (palavra.toLowerCase().charAt(i) == "o")  || (palavra.toLowerCase().charAt(i) == "u")){
      result = result;
    }else{
      result = result+palavra.charAt(i);
    } 
  }
  
  return result;
} 


