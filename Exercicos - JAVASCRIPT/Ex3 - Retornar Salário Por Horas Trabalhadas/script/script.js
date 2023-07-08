function retornaSalario(){

    let horas = document.querySelector(".card__box__input__horas").value;
    let diaria = document.querySelector(".card__box__input__diaria").value;
    let result = document.querySelector(".card__result__text");

    if (horas && diaria){
        result.innerHTML = "Salário igual a R$ " + (horas * diaria); 
    }else{
        result.innerHTML = "Digite horario e valor de diaria corretamente";
    }
    
}