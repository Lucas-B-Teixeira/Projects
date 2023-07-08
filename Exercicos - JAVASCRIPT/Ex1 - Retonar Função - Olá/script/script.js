function retornaNome(){

    let name = document.querySelector(".card__box__input").value;
    let cumprimentar = document.querySelector(".card__result__text");

    console.log(name);

    if (name){
        cumprimentar.innerHTML = "Olá, " + name + "!";
    }else{
        cumprimentar.innerHTML = "DIGITE SEU NOME";
    }
    

}