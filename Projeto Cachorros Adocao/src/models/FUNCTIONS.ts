import * as ONG from './ELEMENTS_ONG';
import * as USR from './ELEMENTS_USER';

//----------------MUDAR DE FORMULÁRIO (DE USR PARA ONG)----------------------------------
export function FORM_ONG(e: MouseEvent) {
    e.preventDefault()
    USR.FORM_USR.style.display = "none";
    ONG.FORM_ONG.style.display = "flex";
    USR.BTN_ONG.style.zIndex = "5";
    ONG.BTN_USR.style.zIndex = "6";
};
//-------------------------------------------------------------------------------------------

//----------------MUDAR DE FORMULÁRIO (DE ONG PARA USUARIO)----------------------------------
export function FORM_USR(e: MouseEvent) {
    e.preventDefault()
    ONG.FORM_ONG.style.display = "none";
    USR.FORM_USR.style.display = "flex";
    ONG.BTN_USR.style.zIndex = "5";
    USR.BTN_ONG.style.zIndex = "6";
}
//-------------------------------------------------------------------------------------------


//----------------PREENCHER CEP COM API---------------------------------------
export function API_CEP(e: KeyboardEvent) {
    if(ONG.CEP.value.length > 8){
      let CONSULTA = "https://cep.awesomeapi.com.br/" + ONG.CEP.value;
      fetch(CONSULTA)
      .then(res => {
          res.json().then(data => {
              ONG.LOGRADOURO.value = data.address;
              ONG.CIDADE.value = data.city
              ONG.BAIRRO.value = data.district;
              ONG.ESTADO.value = data.state;
          })
      })
      .catch(err => console.error('NÃO FOI POSSIVEL ENCONTRAR O CEP,', err));
      }
  };