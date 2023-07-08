function retornaMaiorouIgual(){

    let pri = document.querySelector(".card__box__input__pri").value;
    let seg = document.querySelector(".card__box__input__seg").value;
    let result = document.querySelector(".card__result__text");

    if (pri >= seg){
        result.innerHTML = true; 
    }else{
        result.innerHTML = false;
    }
    
}