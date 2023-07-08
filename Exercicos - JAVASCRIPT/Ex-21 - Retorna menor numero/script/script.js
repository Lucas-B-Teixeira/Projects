
//ver no console log do google
function retornaMenor(arr){

  let menor = arr[0];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < menor){
      menor = arr[i];
    }
  }

  return menor;
  
}  
