
//ver no console log do google
function retornaMult(a, b){
    
    let result = 0;

    if(a >= 0 && b >= 0){
        for(let i = 0; i < b; i++){
           result = result+a; 
        }
        return result;
    }else{
        return "Digite um número maior ou igual a 0";
    }
}