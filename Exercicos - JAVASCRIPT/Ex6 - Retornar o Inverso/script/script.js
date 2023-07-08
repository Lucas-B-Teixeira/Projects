
function retornaInverso(){

    let vlr = document.querySelector(".card__box__input").value;
    let text = document.querySelector(".card__result__text");

    console.log(!isNaN(vlr));

    if(!isNaN(vlr) == true){
          text.innerHTML = vlr * (-1);      
    }else if(vlr.toLowerCase() == "true" || vlr.toLowerCase() == "false"){
        if (vlr.toLowerCase() == "true"){
           text.innerHTML = "false";  
        }else{
            text.innerHTML = "true";   
        }  
    }else{
        text.innerHTML = "booleano ou números esperado, mas o parâmetro é do tipo "+ typeof vlr;
    }

}

