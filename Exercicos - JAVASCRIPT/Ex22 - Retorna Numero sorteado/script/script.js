
//ver no console log do google
function retornaSorteio(num){

  let sorteio = Math.floor(10* Math.random());

  if(sorteio == num){
    return "Parabéns! O número sorteado foi o "+sorteio;
  }else{
    return "Que pena! O número sorteado foi o "+sorteio;
  }
  
}  
