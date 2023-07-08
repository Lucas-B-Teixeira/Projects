function retornaIdade(){

    let idade = document.querySelector(".card__box__input").value;
    let dias = document.querySelector(".card__result__text");

    console.log(idade);

    if (idade){
        dias.innerHTML = (idade * 365) + " Dias";
    }else{
        dias.innerHTML = "DIGITE SUA IDADE";
    }
    

}