
function buscarCEP(){
    
    let CEP = document.querySelector(".box__consulta__campo").value;

    const RUA = document.querySelector(".box__result__rua");
    const CIDADE = document.querySelector(".box__result__cidade");
    const BAIRRO = document.querySelector(".box__result__bairro");
    const ESTADO = document.querySelector(".box__result__estado");

    const URL = "https://cep.awesomeapi.com.br/" + CEP;

    fetch(URL)
    .then(res => {
        res.json().then(data => {

            RUA.value = "RUA: " + data.address;
            CIDADE.value = "CIDADE: " + data.city;
            BAIRRO.value = "BAIRRO: " + data.district;
            ESTADO.value = "ESTADO: " + data.state;

        })

    })
    
    .catch(err => console.error('NÃO FOI POSSIVEL ENCONTRAR O CEP,', err));

}