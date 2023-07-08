
var mes = ['Janiero', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function retornaMes(){

    let numeroMes = document.querySelector(".card__box__input").value;
    let text = document.querySelector(".card__result__text");
    let result = numeroMes - 1;

    console.log(numeroMes);

    if (numeroMes >= 1 && numeroMes <= 12){
        text.innerHTML = mes[result];
    }else{
        text.innerHTML = "Digite Entre 1 e 12";
    }
    

}