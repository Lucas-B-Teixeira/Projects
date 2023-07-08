
//ver no console log do google
function retornaNumInclusivo(num, min, max, inclu){
    
    if(inclu == true){
        if(num == max || num == min){
            return true;
        }else{
            return false;
        }
    }else{
        if(num > min || num < max){
            return true;
        }else{
            return false;
        }
    }
}