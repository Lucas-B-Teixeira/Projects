

//array de todos os dogs
var dogs = [
    {
        nome: "Pipoca",
        cor: "Preto e branco",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpEQuDPeKYcv7ZH84cAqVLOlGj36-s_sNoA&usqp=CAU"
    },
    {
        nome: "Scooby",
        cor: "Preto e Amarelo",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_WAKXB2CM3Q83phn2HzLtMa7yBfP7-4ADA&usqp=CAU"
    },
    {
        nome: "Pitoco",
        cor: "Caramelo",
        porte: "Pequeno",
        descricao: "",
        foto: "https://www.petz.com.br/blog/wp-content/uploads/2019/05/quantos-anos-vive-um-cachorro-vira-lata-2.jpg"
    },
    {
        nome: "Bolinha",
        cor: "Branco e Marrom",
        porte: "Pequeno",
        descricao: "",
        foto: "https://media.gazetadopovo.com.br/viver-bem/2017/02/vira_latacorrendo-600x400-86d7fa10.jpg"
    },
    
    {
        nome: "Princesa",
        cor: "Caramelo",
        porte: "Pequeno",
        descricao: "",
        foto: "https://1.bp.blogspot.com/-Ydwx1StqX-g/V896TZKqJbI/AAAAAAAABdI/xlVJEqs2DVMnXLEbGmTce-IewEWHAFWmgCLcB/s320/18.jpg"
    },
    {
        nome: "Spyke",
        cor: "Branco e Preto",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9ARLhDn0RrCsFnRxj0bI1czftd1jqUz0jw&usqp=CAU"
    },
    {
        nome: "Meg",
        cor: "Preta",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uhhk-wVa5V_IIuAQ9colcGxcnHHwU5WYZA&usqp=CAU"
    },
    {
        nome: "Bisqui",
        cor: "Branco e Preto",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQn6GM13o2WRIoaAJWI57bXgzAFA6jMgbrQ&usqp=CAU"
    },
    {
        nome: "Luna",
        cor: "Caramelo",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGdmgX-zyKZV9EFRntZSFiiSqph2jttM7Ag&usqp=CAU"
    },
    {
        nome: "Teco",
        cor: "Caramelo",
        porte: "Pequeno",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDwW8u6D9BRugnISRnE4NmZM1uYKHpT9eQg&usqp=CAU"
    },
    {
        nome: "Penelope",
        cor: "Caramelo ",
        porte: "Médio",
        descricao: "",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Serena_REFON.jpg/190px-Serena_REFON.jpg"
    },
    {
        nome: "Menina",
        cor: "Preto",
        porte: "Médio",
        descricao: "",
        foto: "https://www.petz.com.br/cachorro/racas/vira-lata/img/vira-lata-saudavel.webp"
    },
    {
        nome: "Scooby",
        cor: "Caramelo",
        porte: "Médio",
        descricao: "",
        foto: "https://f.i.uol.com.br/fotografia/2022/07/31/165923889362e5f9ed200a6_1659238893_3x2_md.jpg"
    },
    {
        nome: "Belinha",
        cor: "Caramelo",
        porte: "Médio",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkmVR6AQGcjxop6FkxLOOHPU64lmtMd71rjrWvVBSvPfkyQS86xEuC-vKBeg64aL7PeQ&usqp=CAU"
    },
    {
        nome: "Cleiton",
        cor: "Caramelo",
        porte: "Médio",
        descricao: "",
        foto: "https://image.cachorrogato.com.br/textimages/ieska/vira-lata-cao.jpg"
    },
    {
        nome: "Spyke",
        cor: "Branco",
        porte: "Médio",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhT95LaiBqN6IIiRVE7yLDDyM9Nn3geiQp8w&usqp=CAU"
    },
    {
        nome: "Kate",
        cor: "Preto",
        porte: "Médio",
        descricao: "",
        foto: "https://webcachorros.com.br/wp-content/uploads/2016/11/vira1.jpg"
    },
    {
        nome: "Neco",
        cor: "Preto e Amarelo",
        porte: "Médio",
        descricao: "",
        foto: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Hendrix.jpeg"
    },
    {
        nome: "Lessi",
        cor: "Caramelo",
        porte: "Médio",
        descricao: "",
        foto: "https://amoraospets.com/wp-content/uploads/2019/05/rac%CC%A7a%CC%83o-para-sem-rac%CC%A7a-definida.jpg"
    },
    {
        nome: "Princesa",
        cor: "Preto",
        porte: "Médio",
        descricao: "",
        foto: "https://www.blupet.com.br/uploads/pets/20795/2079506012016162709000000.jpg"
    }
    ,
    {
        nome: "Ralf",
        cor: "Preto",
        porte: "Grande",
        descricao: "",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR8DYiiVF-uolOUTJhEgyAm5CIw2jfjv4HA&usqp=CAU"
    },
    {
        nome: "Hulk",
        cor: "Caramelo",
        porte: "Grande",
        descricao: "",
        foto: "https://fotos.amomeupet.org/uploads/fotos/1603471983_5f930a6f0a596_hd.jpeg"
    },
    {
        nome: "Thor",
        cor: "Caramelo",
        porte: "Grande",
        descricao: "",
        foto: "https://tribunapr.uol.com.br/cacadores-de-noticias/wp-content/uploads/sites/2/2018/09/toto.jpg"
    },
    {
        nome: "Zeus",
        cor: "Caramelo",
        porte: "Grande",
        descricao: "",
        foto: "https://pbs.twimg.com/media/EahEs7kXYAEZTKR.jpg"
    },
    {
        nome: "Zap",
        cor: "Caramelo",
        porte: "Grande",
        descricao: "",
        foto: "https://media.gazetadopovo.com.br/2019/01/d99ba845fd44fde1f9dc6216a71f6fa1-gpMedium.jpg"
    },
    {
        nome: "Parda",
        cor: "Caramelo",
        porte: "Grande",
        descricao: "",
        foto: "https://guiaanimal.net/uploads/content/image/48079/Design_sem_nome_-_2021-08-18T232031.974.png"
    },
    {
        nome: "Totó",
        cor: "Preto e Amarelo",
        porte: "Grande",
        descricao: "",
        foto: "https://webcachorros.com.br/wp-content/uploads/2020/09/cachorro-vira-lata.jpg"
    },
    {
        nome: "Sant",
        cor: "Branco",
        porte: "Grande",
        descricao: "",
        foto: "https://thumbs.dreamstime.com/z/vira-lata-branca-triste-e-assustado-com-nariz-ferido-os-olhos-delicados-que-olham-c%C3%A2mera-foto-do-c%C3%A3o-disperso-espa%C3%A7o-da-148643522.jpg"
    },
    {
        nome: "Rajado",
        cor: "Preto e Amarelo",
        porte: "Grande",
        descricao: "",
        foto: "https://image.cachorrogato.com.br/textimages/vira-lata-caes-sem-raca-definida.jpg"
    },
    {
        nome: "Pipoca",
        cor: "Preto e Amarelo",
        porte: "Grande",
        descricao: "",
        foto: "https://i.pinimg.com/originals/ee/5b/58/ee5b58e2b084944c9b98d09c2a3c1176.jpg"
    }
];

var LargCards = 15; // variavel de largura dos cards
var CardsNaTela = 5; // variavel para saber quantos cards cabem na tela

var PortePequeno = []; // array de cachorros de porte pequeno
var PorteMedio = []; // array de cachorros de porte medio
var PorteGrande = []; // array de cachorros de porte grande

//constantes para stylização dos cards criados dinamicamente
const CONJUNTOCARD_STYLE = "display:flex;";
const CARD_STYLE = "width:" + LargCards + "vw; height: 45vh; background-Color: white; display: flex; flex-Direction: column; margin-right: 0.868vw; transition: all ease 0.3s";
const IMG_STYLE = "width: 90%; height: 60%; margin-Top: 5%; margin-left: 5%; display: flex; justify-content: center; align-items: center; overflow: hidden";
const BOX_TEXT_STYLE = "display: flex; flex-Direction: column; width: 70%; justify-Content: space-between; margin-left: 5%";
const FONTE = "font-family: Poppins";
const LINHA = "display: flex; height:3vh";
const BTN_STYLE = "cursor: pointer; transition: all ease 0.3s; background-Color: rgb(65, 105, 225); border-radius: 10px; width: 90%; height: 10%; margin-left: 5%; border: none; font-family: Poppins; display: flex; justify-Content: center; align-items: center; color: white; font-size:1vw";
//--------------------------------------------------------//

var auxJ = 0; // variavel para o controle do loop J na função onload (criação de card)
var auxL = 0; // variavel para o controle do loop L na função onload (criação de card)
var auxN = 0; // variavel para o controle do loop N na função onload (criação de card)

var PositionPequeno = []; // array de posições left das sections da categotia porte pequeno
var PositionMedio = []; // array de posições left das sections da categotia porte medio
var PositionGrande = []; // array de posições left das sections da categotia porte grande

function createCardPequeno(){
    
    let controleCreateCard = CardsNaTela; // variavel para ter o controle de cards criados e não criar repetido

    //Loop para criacção de sessão contendo cards dentro dela baseado na array de objetos, cada sessão terá a quantidade de CardsNaTela dentro dela.
    for(let i = 0; i < (PortePequeno.length/CardsNaTela); i++){
        let conjuntoCardPequeno = document.createElement("section"); // cria section
        document.querySelector(".main__portePequeno__sliders__box__visu").appendChild(conjuntoCardPequeno); // adiciona a section dentro do elemento pai
        conjuntoCardPequeno.className = "conjunto__card__pequeno" + i; // atribui nome da classe
        conjuntoCardPequeno.id = "conjunto__pequeno" + i; // atribui nome do id
        conjuntoCardPequeno.style = CONJUNTOCARD_STYLE;  // aplica a stilização da section 
        PositionPequeno.push(conjuntoCardPequeno.getBoundingClientRect().left); // armazena a posição left de cada section dentro da array PositionPequeno

        //loop para criação de cards dentro da sessão baseada na quantidade de CardsNaTela dentro de cada sessão criada.
        for(let j = auxJ; j < controleCreateCard; j++){
            auxJ++; // variavel de auxilio para não criar os mesmos cards que ja foram criados.

            let cardPequeno = document.createElement("div"); //criação de uma div
            document.querySelector(".conjunto__card__pequeno" + i).appendChild(cardPequeno); // colocando a div dentro da sessão
            cardPequeno.className = "visu__card__pequeno" + i + "__" + j; // adicionadno o classname da div criada
            cardPequeno.style = CARD_STYLE; // adicionando a stilização dentro da div
            //função para crescer o card quando passar o mouse;
            cardPequeno.onmouseover = function(){
                cardPequeno.style.transform = "scale(1.05)";
                document.querySelector("header").style.position = "fixed";
                cardPequeno.style.boxShadow = "5px 5px 5px rgb(49,48,48)";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            cardPequeno.onmouseout = function(){
                cardPequeno.style.transform = "none";
                cardPequeno.style.boxShadow = "none";
            }

            //CRIAÇÃO DE CARDS DINAMICAMENTE DE ACORDO COM O ARRAY DE OBJETOS, PASSANDO POR ELES ATRAVÉS DAS VARIAVEIS i e j.
            //campo de imagem do card
            let imagePequeno = document.createElement("img");
            cardPequeno.appendChild(imagePequeno);
            imagePequeno.className = "visu__card__pequeno" + i + "__" + j + "__img";
            imagePequeno.style = IMG_STYLE;
            imagePequeno.src = PortePequeno[j].foto;

            //campo de textos do card
            let box_textPequeno = document.createElement("div");
            cardPequeno.appendChild(box_textPequeno);
            box_textPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__box__text";
            box_textPequeno.style = BOX_TEXT_STYLE;

            //campo do botão adotar do card
            let btn_adotarPequeno = document.createElement("button");
            cardPequeno.appendChild(btn_adotarPequeno);
            btn_adotarPequeno.style = BTN_STYLE;
            btn_adotarPequeno.innerHTML = "Adotar";
            btn_adotarPequeno.onmouseover = function(){
                btn_adotarPequeno.style.transform = "scale(1.05)";
                btn_adotarPequeno.style.backgroundColor = "blue";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            btn_adotarPequeno.onmouseout = function(){
                btn_adotarPequeno.style.transform = "none";
                btn_adotarPequeno.style.backgroundColor = "rgb(65, 105, 225)";
            }

            //campo de texto nome do card
            let box_namePequeno = document.createElement("div");
            box_textPequeno.appendChild(box_namePequeno);
            box_namePequeno.className = "visu__card__pequeno" + i + "__" + j +  "__name";
            box_namePequeno.style = LINHA;

            //campo de texto fixo "nome" do card
            let box_name_campoPequeno = document.createElement("p");
            box_namePequeno.appendChild(box_name_campoPequeno);
            box_name_campoPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__name__campo";
            box_name_campoPequeno.innerHTML = "Nome:"
            box_name_campoPequeno.style = FONTE;
            box_name_campoPequeno.style.marginRight = "10%";

            //campo de texto dinamico "nome" do card
            let box_name_textPequeno = document.createElement("p");
            box_namePequeno.appendChild(box_name_textPequeno);
            box_name_textPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__name__text";
            box_name_textPequeno.innerHTML = PortePequeno[j].nome;
            box_name_textPequeno.style = FONTE;

            //campo de texto "cor" do card
            let box_corPequeno = document.createElement("div");
            box_textPequeno.appendChild(box_corPequeno);
            box_corPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__cor";
            box_corPequeno.style = LINHA;

            //campo de texto fixo "cor" do card
            let box_cor_campoPequeno = document.createElement("p");
            box_corPequeno.appendChild(box_cor_campoPequeno);
            box_cor_campoPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__cor__campo";
            box_cor_campoPequeno.innerHTML = "Cor:"
            box_cor_campoPequeno.style = FONTE;
            box_cor_campoPequeno.style.marginRight = "10%";

            //campo de texto dinamico "cor" do card
            let box_cor_textPequeno = document.createElement("p");
            box_corPequeno.appendChild(box_cor_textPequeno);
            box_cor_textPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__cor__text";
            box_cor_textPequeno.style = FONTE;
            box_cor_textPequeno.innerHTML = PortePequeno[j].cor;

            //campo de texto "porte" do card
            let box_portePequeno = document.createElement("div");
            box_textPequeno.appendChild(box_portePequeno);
            box_portePequeno.className = "visu__card__pequeno" + i + "__" + j +  "__porte";
            box_portePequeno.style = LINHA;

            //campo de texto fixo "porte" do card
            let box_porte_campoPequeno = document.createElement("p");
            box_portePequeno.appendChild(box_porte_campoPequeno);
            box_porte_campoPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__porte__campo";
            box_porte_campoPequeno.innerHTML = "Porte:"
            box_porte_campoPequeno.style = FONTE;
            box_porte_campoPequeno.style.marginRight = "10%";

            //campo de texto dinamico "porte" do card
            let box_porte_textPequeno = document.createElement("p");
            box_portePequeno.appendChild(box_porte_textPequeno);
            box_porte_textPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__porte__text";
            box_porte_textPequeno.style = FONTE;
            box_porte_textPequeno.innerHTML = PortePequeno[j].porte;

            //campo de texto "descrição" do card
            let box_descPequeno = document.createElement("div");
            box_textPequeno.appendChild(box_descPequeno);
            box_descPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__desc";

            //campo de texto fixdo "descrição" do card
            let box_desc_campoPequeno = document.createElement("p");
            box_descPequeno.appendChild(box_desc_campoPequeno);
            box_desc_campoPequeno.className = "visu__card__pequeno" + i + "__" + j +  "__desc__campo";

            //campo de texto dinamico "descrição" do card
            let box_desc_textPequeno = document.createElement("p");
            box_descPequeno.appendChild(box_desc_textPequeno);
            box_desc_textPequeno.className = "visu__card__pequeno" + i + "__" + j + "__desc__text";
        }   

        // input na variavel de controle para não criar cards repetidos
        if(PortePequeno.length - auxJ >= CardsNaTela){
            controleCreateCard =  CardsNaTela + auxJ; 
        }else{
            controleCreateCard = controleCreateCard + (PortePequeno.length - auxJ);
        }
    }

}

function createCardMedio(){

    let controleCreateCard = CardsNaTela; // variavel para ter o controle de cards criados e não criar repetido

    //Loop para criacção de sessão contendo cards dentro dela baseado na array de objetos, cada sessão terá a quantidade de CardsNaTela dentro dela.
    for(let k = 0; k < (PorteMedio.length/CardsNaTela); k++){
        let conjuntoCardMedio = document.createElement("section"); // cria section
        document.querySelector(".main__porteMedio__sliders__box__visu").appendChild(conjuntoCardMedio); // adiciona a section dentro do elemento pai
        conjuntoCardMedio.className = "conjunto__card__Medio" + k;  // atribui nome da classe
        conjuntoCardMedio.id = "conjunto__Medio" + k; // atribui nome do id
        conjuntoCardMedio.style = CONJUNTOCARD_STYLE; // aplica a stilização da section 
        PositionMedio.push(conjuntoCardMedio.getBoundingClientRect().left);// armazena a posição left de cada section dentro da array PositionMedio

        //loop para criação de cards dentro da sessão baseada na quantidade de CardsNaTela dentro de cada sessão criada.
        for(let l = auxL; l < controleCreateCard; l++){
            auxL++; // variavel de auxilio para não criar os mesmos cards que ja foram criados.

            let cardMedio = document.createElement("div"); //criação de uma div
            document.querySelector(".conjunto__card__Medio" + k).appendChild(cardMedio); // colocando a div dentro da sessão
            cardMedio.className = "visu__card__Medio" + k + "__" + l; // adicionadno o classname da div criada
            cardMedio.style = CARD_STYLE; // adicionando a stilização dentro da div
            //função para crescer o card quando passar o mouse;
            cardMedio.onmouseover = function(){
                cardMedio.style.transform = "scale(1.05)";
                cardMedio.style.boxShadow = "5px 5px 5px rgb(49,48,48)";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            cardMedio.onmouseout = function(){
                cardMedio.style.transform = "none";
                cardMedio.style.boxShadow = "none";
            }

            //CRIAÇÃO DE CARDS DINAMICAMENTE DE ACORDO COM O ARRAY DE OBJETOS, PASSANDO POR ELES ATRAVÉS DAS VARIAVEIS i e j.
            //campo de imagem do card
            let imageMedio = document.createElement("img");
            cardMedio.appendChild(imageMedio);
            imageMedio.className = "visu__card__Medio" + k + "__" + l + "__img";
            imageMedio.style = IMG_STYLE;
            imageMedio.src = PorteMedio[l].foto;

            //campo de textos do card
            let box_textMedio = document.createElement("div");
            cardMedio.appendChild(box_textMedio);
            box_textMedio.className = "visu__card__Medio" + k + "__" + l +  "__box__text";
            box_textMedio.style = BOX_TEXT_STYLE;

            //campo do botão adotar do card
            let btn_adotarMedio = document.createElement("button");
            cardMedio.appendChild(btn_adotarMedio);
            btn_adotarMedio.style = BTN_STYLE;
            btn_adotarMedio.innerHTML = "Adotar";
            btn_adotarMedio.onmouseover = function(){
                btn_adotarMedio.style.transform = "scale(1.05)";
                btn_adotarMedio.style.backgroundColor = "blue";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            btn_adotarMedio.onmouseout = function(){
                btn_adotarMedio.style.transform = "none";
                btn_adotarMedio.style.backgroundColor = "rgb(65, 105, 225)";
            }

            //campo de texto nome do card
            let box_nameMedio = document.createElement("div");
            box_textMedio.appendChild(box_nameMedio);
            box_nameMedio.className = "visu__card__Medio" + k + "__" + l +  "__name";
            box_nameMedio.style = LINHA;

            //campo de texto fixo "nome" do card
            let box_name_campoMedio = document.createElement("p");
            box_nameMedio.appendChild(box_name_campoMedio);
            box_name_campoMedio.className = "visu__card__Medio" + k + "__" + l +  "__name__campo";
            box_name_campoMedio.innerHTML = "Nome:"
            box_name_campoMedio.style = FONTE;
            box_name_campoMedio.style.marginRight = "10%";

            //campo de texto dinamico "nome" do card
            let box_name_textMedio = document.createElement("p");
            box_nameMedio.appendChild(box_name_textMedio);
            box_name_textMedio.className = "visu__card__Medio" + k + "__" + l +  "__name__text";
            box_name_textMedio.innerHTML = PorteMedio[l].nome;
            box_name_textMedio.style = FONTE;

            //campo de texto "cor" do card
            let box_corMedio = document.createElement("div");
            box_textMedio.appendChild(box_corMedio);
            box_corMedio.className = "visu__card__Medio" + k + "__" + l +  "__cor";
            box_corMedio.style = LINHA;

            //campo de texto fixo "cor" do card
            let box_cor_campoMedio = document.createElement("p");
            box_corMedio.appendChild(box_cor_campoMedio);
            box_cor_campoMedio.className = "visu__card__Medio" + k + "__" + l +  "__cor__campo";
            box_cor_campoMedio.innerHTML = "Cor:"
            box_cor_campoMedio.style = FONTE;
            box_cor_campoMedio.style.marginRight = "10%";

            //campo de texto dinamico "cor" do card
            let box_cor_textMedio = document.createElement("p");
            box_corMedio.appendChild(box_cor_textMedio);
            box_cor_textMedio.className = "visu__card__Medio" + k + "__" + l +  "__cor__text";
            box_cor_textMedio.style = FONTE;
            box_cor_textMedio.innerHTML = PorteMedio[l].cor;

            //campo de texto "porte" do card
            let box_porteMedio = document.createElement("div");
            box_textMedio.appendChild(box_porteMedio);
            box_porteMedio.className = "visu__card__Medio" + k + "__" + l +  "__porte";
            box_porteMedio.style = LINHA;

            //campo de texto fixo "porte" do card
            let box_porte_campoMedio = document.createElement("p");
            box_porteMedio.appendChild(box_porte_campoMedio);
            box_porte_campoMedio.className = "visu__card__Medio" + k + "__" + l +  "__porte__campo";
            box_porte_campoMedio.innerHTML = "Porte:"
            box_porte_campoMedio.style = FONTE;
            box_porte_campoMedio.style.marginRight = "10%";

            //campo de texto dinamico "porte" do card
            let box_porte_textMedio = document.createElement("p");
            box_porteMedio.appendChild(box_porte_textMedio);
            box_porte_textMedio.className = "visu__card__Medio" + k + "__" + l +  "__porte__text";
            box_porte_textMedio.style = FONTE;
            box_porte_textMedio.innerHTML = PorteMedio[l].porte;

            //campo de texto "descrição" do card
            let box_descMedio = document.createElement("div");
            box_textMedio.appendChild(box_descMedio);
            box_descMedio.className = "visu__card__Medio" + k + "__" + l +  "__desc";

            //campo de texto fixdo "descrição" do card
            let box_desc_campoMedio = document.createElement("p");
            box_descMedio.appendChild(box_desc_campoMedio);
            box_desc_campoMedio.className = "visu__card__Medio" + k + "__" + l +  "__desc__campo";

            //campo de texto dinamico "descrição" do card
            let box_desc_textMedio = document.createElement("p");
            box_descMedio.appendChild(box_desc_textMedio);
            box_desc_textMedio.className = "visu__card__Medio" + k + "__" + l + "__desc__text";
        }  

        // input na variavel de controle para não criar cards repetidos
        if(PorteMedio.length - auxL >= CardsNaTela){
            controleCreateCard =  CardsNaTela + auxL; 
        }else{
            controleCreateCard = controleCreateCard + (PorteMedio.length - auxL);
        } 

    }
}

function createCardGrande(){

    let controleCreateCard = CardsNaTela; // variavel para ter o controle de cards criados e não criar repetido

     //Loop para criacção de sessão contendo cards dentro dela baseado na array de objetos, cada sessão terá a quantidade de CardsNaTela dentro dela.
    for(let m= 0; m < (PorteGrande.length/CardsNaTela); m++){
        let conjuntoCardGrande = document.createElement("section"); // cria section
        document.querySelector(".main__porteGrande__sliders__box__visu").appendChild(conjuntoCardGrande); // adiciona a section dentro do elemento pai
        conjuntoCardGrande.className = "conjunto__card__Grande" + m; // atribui nome da classe
        conjuntoCardGrande.id = "conjunto__Grande" + m; // atribui nome do id
        conjuntoCardGrande.style = CONJUNTOCARD_STYLE;  // aplica a stilização da section 
        PositionGrande.push(conjuntoCardGrande.getBoundingClientRect().left);// armazena a posição left de cada section dentro da array PositionGrande

        //loop para criação de cards dentro da sessão baseada na quantidade de CardsNaTela dentro de cada sessão criada.
        for(let  n= auxN; n < controleCreateCard; n++){
            auxN++; // variavel de auxilio para não criar os mesmos cards que ja foram criados.

            let cardGrande = document.createElement("div"); //criação de uma div
            document.querySelector(".conjunto__card__Grande" + m).appendChild(cardGrande); // colocando a div dentro da sessão
            cardGrande.className = "visu__card__Grande" + m + "__" + n; // adicionadno o classname da div criada
            cardGrande.style = CARD_STYLE; // adicionando a stilização dentro da div
            //função para crescer o card quando passar o mouse;
            cardGrande.onmouseover = function(){
                cardGrande.style.transform = "scale(1.05)";
                cardGrande.style.boxShadow = "5px 5px 5px rgb(49,48,48)";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            cardGrande.onmouseout = function(){
                cardGrande.style.transform = "none";
                cardGrande.style.boxShadow = "none";
            }
            

            //CRIAÇÃO DE CARDS DINAMICAMENTE DE ACORDO COM O ARRAY DE OBJETOS, PASSANDO POR ELES ATRAVÉS DAS VARIAVEIS i e j.
            //campo de imagem do card
            let imageGrande = document.createElement("img");
            cardGrande.appendChild(imageGrande);
            imageGrande.className = "visu__card__Grande" + m + "__" + n + "__img";
            imageGrande.style = IMG_STYLE;
            imageGrande.src = PorteGrande[n].foto;

            //campo de textos do card
            let box_textGrande = document.createElement("div");
            cardGrande.appendChild(box_textGrande);
            box_textGrande.className = "visu__card__Grande" + m + "__" + n +  "__box__text";
            box_textGrande.style = BOX_TEXT_STYLE;

            //campo do botão adotar do card
            let btn_adotarGrande = document.createElement("button");
            cardGrande.appendChild(btn_adotarGrande);
            btn_adotarGrande.style = BTN_STYLE;
            btn_adotarGrande.innerHTML = "Adotar";
            btn_adotarGrande.onmouseover = function(){
                btn_adotarGrande.style.transform = "scale(1.05)";
                btn_adotarGrande.style.backgroundColor = "blue";
            }
            //função para voltar o card ao normal quando tirar o mouse;
            btn_adotarGrande.onmouseout = function(){
                btn_adotarGrande.style.transform = "none";
                btn_adotarGrande.style.backgroundColor = "rgb(65, 105, 225)";
            }

            //campo de texto nome do card
            let box_nameGrande = document.createElement("div");
            box_textGrande.appendChild(box_nameGrande);
            box_nameGrande.className = "visu__card__pequeno" + m + "__" + n +  "__name";
            box_nameGrande.style = LINHA;

            //campo de texto fixo "nome" do card
            let box_name_campoGrande = document.createElement("p");
            box_nameGrande.appendChild(box_name_campoGrande);
            box_name_campoGrande.className = "visu__card__Grande" + m + "__" + n +  "__name__campo";
            box_name_campoGrande.innerHTML = "Nome:"
            box_name_campoGrande.style = FONTE;
            box_name_campoGrande.style.marginRight = "10%";

            //campo de texto dinamico "nome" do card
            let box_name_textGrande = document.createElement("p");
            box_nameGrande.appendChild(box_name_textGrande);
            box_name_textGrande.className = "visu__card__Grande" + m + "__" + n +  "__name__text";
            box_name_textGrande.innerHTML = PorteGrande[n].nome;
            box_name_textGrande.style = FONTE;

            //campo de texto "cor" do card
            let box_corGrande = document.createElement("div");
            box_textGrande.appendChild(box_corGrande);
            box_corGrande.className = "visu__card__Grande" + m + "__" + n +  "__cor";
            box_corGrande.style = LINHA;

            //campo de texto fixo "cor" do card
            let box_cor_campoGrande= document.createElement("p");
            box_corGrande.appendChild(box_cor_campoGrande);
            box_cor_campoGrande.className = "visu__card__Grande" + m + "__" + n +  "__cor__campo";
            box_cor_campoGrande.innerHTML = "Cor:"
            box_cor_campoGrande.style = FONTE;
            box_cor_campoGrande.style.marginRight = "10%";

            //campo de texto dinamico "cor" do card
            let box_cor_textGrande = document.createElement("p");
            box_corGrande.appendChild(box_cor_textGrande);
            box_cor_textGrande.className = "visu__card__Grande" + m + "__" + n +  "__cor__text";
            box_cor_textGrande.style = FONTE;
            box_cor_textGrande.innerHTML = PorteGrande[n].cor;

            //campo de texto "porte" do card
            let box_porteGrande = document.createElement("div");
            box_textGrande.appendChild(box_porteGrande);
            box_porteGrande.className = "visu__card__Grande" + m + "__" + n +  "__porte";
            box_porteGrande.style = LINHA;

            //campo de texto fixo "porte" do card
            let box_porte_campoGrande = document.createElement("p");
            box_porteGrande.appendChild(box_porte_campoGrande);
            box_porte_campoGrande.className = "visu__card__Grande" + m + "__" + n +  "__porte__campo";
            box_porte_campoGrande.innerHTML = "Porte:"
            box_porte_campoGrande.style = FONTE;
            box_porte_campoGrande.style.marginRight = "10%";

            //campo de texto dinamico "porte" do card
            let box_porte_textGrande = document.createElement("p");
            box_porteGrande.appendChild(box_porte_textGrande);
            box_porte_textGrande.className = "visu__card__Grande" + m + "__" + n +  "__porte__text";
            box_porte_textGrande.style = FONTE;
            box_porte_textGrande.innerHTML = PorteGrande[n].porte;

            //campo de texto "descrição" do card
            let box_descGrande = document.createElement("div");
            box_textGrande.appendChild(box_descGrande);
            box_descGrande.className = "visu__card__Grande" + m + "__" + n +  "__desc";

            //campo de texto fixdo "descrição" do card
            let box_desc_campoGrande = document.createElement("p");
            box_descGrande.appendChild(box_desc_campoGrande);
            box_desc_campoGrande.className = "visu__card__Grande" + m + "__" + n +  "__desc__campo";

            //campo de texto dinamico "descrição" do card
            let box_desc_textGrande = document.createElement("p");
            box_descGrande.appendChild(box_desc_textGrande);
            box_desc_textGrande.className = "visu__card__Grande" + m + "__" + n + "__desc__text";
        }   

        // input na variavel de controle para não criar cards repetidos
        if(PorteGrande.length - auxN >= CardsNaTela){
            controleCreateCard =  CardsNaTela + auxN; 
        }else{
            controleCreateCard = controleCreateCard + (PorteGrande.length - auxN);
        } 
    }
}

window.onload = function createCard(){

    // loop que filtra os cachorros pelo porte e adiciona dento da array correspondente do porte
    for(let cont = 0; cont < dogs.length; cont++){
        if(dogs[cont].porte == "Pequeno"){
            PortePequeno.push(dogs[cont]);
        }
        if(dogs[cont].porte == "Médio"){
            PorteMedio.push(dogs[cont]);
        }
        if(dogs[cont].porte == "Grande"){
            PorteGrande.push(dogs[cont]);
        }
    }

    //chama as funções para a criação dos cards
    createCardPequeno();
    createCardMedio(); 
    createCardGrande(); 

}

var slidePP = 0; // variavel para controle de qual sessão será direcionada para a visualizção(porte Pequeno).
var slidePM = 0; // variavel para controle de qual sessão será direcionada para a visualizção(porte Médio).
var slidePG = 0; // variavel para controle de qual sessão será direcionada para a visualizção(porte Grande).

//função para proximo slide PORTE PEQUENO
function slideProxPP(){
    let quantSection = document.querySelector('.main__portePequeno__sliders__box__visu').childElementCount; //conta quantos elementos(sections) tem dentro da div
    if(slidePP < quantSection - 1){
        slidePP = slidePP + 1;   
    }
    let a = document.querySelector(".main__portePequeno__sliders__box").getBoundingClientRect().left; //pega a posição left do box de visualização
    document.querySelector(".main__portePequeno__sliders__box").scrollTo(PositionPequeno[slidePP] - a, 0); //move ate a posição que foi consultada dentro da array de posições
    
}

//função para slide anterior PORTE PEQUENO
function slideAntePP(){
    if(slidePP > 0){
        slidePP = slidePP - 1;
    } 
    let a = document.querySelector(".main__portePequeno__sliders__box").getBoundingClientRect().left; //pega a posição left do box de visualização
    document.querySelector(".main__portePequeno__sliders__box").scrollTo(PositionPequeno[slidePP] - a, 0); //move ate a posição que foi consultada dentro da array de posições
}


//função para proximo slide PORTE MEDIO
function slideProxPM(){
    let quantSection = document.querySelector('.main__porteMedio__sliders__box__visu').childElementCount; //conta quantos elementos(sections) tem dentro da div
    if(slidePM < quantSection - 1){
        slidePM = slidePM + 1;
    }
    let a = document.querySelector(".main__porteMedio__sliders__box").getBoundingClientRect().left; //pega a posição left do box de visualização
    document.querySelector(".main__porteMedio__sliders__box").scrollTo(PositionMedio[slidePM] - a, 0);//move ate a posição que foi consultada dentro da array de posições
}

//função para slide anterior PORTE MEDIO
function slideAntePM(){
    if(slidePM > 0){
        slidePM = slidePM - 1;
    } 
    let a = document.querySelector(".main__porteMedio__sliders__box").getBoundingClientRect().left;
    document.querySelector(".main__porteMedio__sliders__box").scrollTo(PositionMedio[slidePM] - a , 0);
}


//função para proximo slide PORTE GRANDE
function slideProxPG(){
    let quantSection = document.querySelector('.main__porteGrande__sliders__box__visu').childElementCount; //conta quantos elementos(sections) tem dentro da div
    if(slidePG < quantSection - 1){
        slidePG = slidePG + 1;
    }
    let a = document.querySelector(".main__porteGrande__sliders__box").getBoundingClientRect().left; //pega a posição left do box de visualização
    document.querySelector(".main__porteGrande__sliders__box").scrollTo(PositionGrande[slidePG] - a, 0); //move ate a posição que foi consultada dentro da array de posições
}

//função para slide anterior PORTE GRANDE
function slideAntePG(){

    if(slidePG > 0){
        slidePG = slidePG - 1;
    } 
    let a = document.querySelector(".main__porteGrande__sliders__box").getBoundingClientRect().left; //pega a posição left do box de visualização
    document.querySelector(".main__porteGrande__sliders__box").scrollTo(PositionGrande[slidePG] - a, 0); //move ate a posição que foi consultada dentro da array de posições
}