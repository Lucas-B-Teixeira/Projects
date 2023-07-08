import * as ONG from './models/ELEMENTS_ONG';
import * as USR from './models/ELEMENTS_USER';
import {form_ong} from './models/ONG_FORM';
import {form_usr} from './models/USR_FORM';
import * as functions from './models/FUNCTIONS'

//----------------CLASSE ONG----------------------------------------------------
class ong implements form_ong{
    nome;
    CEP;
    logradouro;
    cidade;
    estado;
    bairro;
    numero;
    ponto_ref;
    telefone;
    CNPJ;
    email;
    senha;
    conf_senha;

    constructor(nome: string, CEP: string, logradouro: string, cidade: string, estado: string, bairro: string, 
    numero: string, ponto_ref: string, telefone: string, CNPJ: string, email: string, senha: string, conf_senha:string){
        this.nome = nome;
        this.CEP = CEP;
        this.logradouro = logradouro;
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
        this.numero = numero;
        this.ponto_ref = ponto_ref;
        this.telefone = telefone;
        this.CNPJ = CNPJ;
        this.email = email;
        this.senha = senha;
        this.conf_senha = conf_senha;
    }
}
//-------------------------------------------------------------------------------------------

//----------------CLASSE USR----------------------------------------------------
class usr implements form_usr{
    primeiro_nome;
    segundo_nome;
    telefone;
    estado;
    email;
    senha;
    conf_senha;

    constructor(primeiro_nome: string, segundo_nome: string, telefone: string, estado: string, email: string, senha: string, 
    conf_senha: string){
        this.primeiro_nome = primeiro_nome;
        this.segundo_nome = segundo_nome;
        this.telefone = telefone;
        this.estado = estado;
        this.email = email;
        this.senha = senha;
        this.conf_senha = conf_senha;
    }
}
//-------------------------------------------------------------------------------------------

//----------------MUDAR DE FORMULÁRIO (DE USR PARA ONG)----------------------------------
USR.BTN_ONG.addEventListener('click', functions.FORM_ONG);

//----------------MUDAR DE FORMULÁRIO (DE ONG PARA USUARIO)----------------------------------
ONG.BTN_USR.addEventListener('click', functions.FORM_USR);

//----------------PREENCHER CEP COM API---------------------------------------
ONG.CEP.addEventListener('keypress', functions.API_CEP);


//----------------CRIAR UM NOVO USUARIO AO CLICAR EM CADASTAR---------------------------------------
USR.BTNCAD.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    if(USR.PNOME.value == "" || USR.SNOME.value == "" || USR.TEL.value == "" || USR.ESTADO.value == "" ||
    USR.EMAIL.value == "" || USR.PASS.value == "" || USR.CONFPASS.value == ""){
      alert("Todos os campos são obrigatórios!");
    }else if(USR.PASS.value != USR.CONFPASS.value){
      alert("Confirmação de senha incorreta!");
    }
    else if(USR.TEL.value.length < 14){
      alert("Complete o telefone corretamente!");
    }
    else if(USR.EMAIL.value.search("@") == -1){
      alert("E-mail invalido!");
    }
    else{
        let newusr: object = new usr (USR.PNOME.value, USR.SNOME.value, USR.TEL.value, USR.ESTADO.value, USR.EMAIL.value,
            USR.PASS.value, USR.CONFPASS.value);
        console.log(newusr);
        USR.USR.reset();
        alert("Usuário cadastrado com sucesso!");
    }
  });

//-------------------------------------------------------------------------------------------

//----------------CRIAR NOVA ONG AO CLICAR EM CADASTAR---------------------------------------
ONG.BTNCAD.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    if(ONG.NOME.value == "" || ONG.CEP.value == "" || ONG.LOGRADOURO.value == "" || ONG.CIDADE.value == "" || 
    ONG.BAIRRO.value == "" || ONG.ESTADO.value == "" || ONG.NUM.value == "" || ONG.PREF.value == "" || ONG.TEL.value == "" ||
    ONG.CNPJ.value == "" || ONG.EMAIL.value == "" || ONG.PASS.value == "" || ONG.CONFPASS.value == ""){
        alert("Todos os campos são obrigatórios!");
    }else if(ONG.CEP.value.length < 9){
        alert("CEP INCOMPLETO!");
    }else if(ONG.TEL.value.length < 14){
        alert("Complete o telefone corretamente!");
    }else if(ONG.CNPJ.value.length < 18){
        alert("CNPJ INCOMPLETO!");
    }else if(ONG.EMAIL.value.search("@") == -1){
        alert("E-mail invalido!");
    }else if(ONG.PASS.value != ONG.CONFPASS.value){
        alert("Confirmação de senha incorreta!");
    }else{
        let newong: object = new ong (ONG.NOME.value, ONG.CEP.value, ONG.LOGRADOURO.value, ONG.CIDADE.value, ONG.ESTADO.value,
                    ONG.BAIRRO.value, ONG.NUM.value, ONG.PREF.value, ONG.TEL.value, ONG.CNPJ.value, ONG.EMAIL.value,
                    ONG.PASS.value, ONG.CONFPASS.value);
        console.log(newong);
        ONG.ONG.reset();
        alert("Usuário cadastrado com sucesso!");
  }
})
//-------------------------------------------------------------------------------------------
