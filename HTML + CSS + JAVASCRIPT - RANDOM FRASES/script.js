
//----------variavel de controle para o dorpdowns--------------//
var clickDropdown = 0;
//-------------------------------------------------------------//

//-------------------Array's das frases------------------------//
//array das frases de amor
var amor = [
        { frase: '"Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura."', autor: '"Friedrich Nietzsche"'},
        { frase: '"Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?"', autor: '"Fernando Pessoa"'},
        { frase: '"Amor não é se envolver com a pessoa perfeita, aquela dos nossos sonhos. Não existem príncipes nem princesas. Encare a outra pessoa de forma sincera e real, exaltando suas qualidades, mas sabendo também de seus defeitos. O amor só é lindo, quando encontramos alguém que nos transforme no melhor que podemos ser."', autor: '"Desconhecido"'},
        { frase: '"Purifica o teu coração antes de permitires que o amor entre nele, pois até o mel mais doce azeda num recipiente sujo."', autor: '"Pitágoras"'},
        { frase: '"Tão bom morrer de amor! E continuar vivendo..."', autor: '"Mario Quintana"'},
        { frase: '"Aquilo que se faz por amor está sempre além do bem e do mal."', autor: '"Friedrich Nietzsche"'},
        { frase: '"As mais lindas palavras de amor são ditas no silêncio de um olhar."', autor: '"Leonardo da Vinci"'},
        { frase: '"O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem."', autor: '"Antoine de Saint-Exupéry"'},
        { frase: '"A distância faz ao amor aquilo que o vento faz ao fogo: apaga o pequeno, inflama o grande."', autor: '"Roger Bussy-Rabutin"'},
        { frase: '"Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval."', autor: '"Toquinho e Mutinho"'}
];

//array das frases de motivação
var motivacao = [
    { frase: '"A esperança não será a prova de um sentido oculto da Existência, uma coisa que merece que se lute por ela?"', autor: '"Ernesto Sabato"'},
    { frase: '"Conserve os olhos fixos num ideal sublime e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida."', autor: '"Desconhecido"'},
    { frase: '"Ser você mesmo em um mundo que está constantemente tentando fazer de você outra coisa é a maior realização."', autor: '"Ralph Waldo Emerson"'},
    { frase: '"Os professores abrem a porta, mas você deve entrar por você mesmo."', autor: '"Provérbio Chinês"'},
    { frase:'"Não é justo pedir aos outros o que você mesmo não está disposto a fazer."', autor: '"Eleanor Roosevelt"'},
    { frase: '"Quando você está satisfeito por ser simplesmente você mesmo e não se compara ou compete, todo mundo te respeitará."', autor: '"Lao-Tsé"'},
    { frase: '"Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo."', autor: '"Aldous Huxley"'},
    { frase: '"Você consegue o melhor dos outros quando você dá o melhor de você mesmo"', autor: '"Harry Firestone"'},
    { frase: '"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre."', autor: '"Tumblr"'},
    { frase: '"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!"', autor: '"Desconhecido"'},
]

//array das frases de inspiração
var inspiracao = [
    { frase: '"Não extingua sua inspiração e sua imaginação; não se torne o escravo do seu modelo."', autor: '"Vincent van Gogh"'},
    { frase: '"Talento é 1% inspiração e 99% transpiração."', autor: '"Thomas Edison"'},
    { frase: '"Que a inspiração chegue não depende de mim. A única coisa que posso fazer é garantir que ela me encontre trabalhando."', autor: '"Pablo Picasso"'},
    { frase: '"A inspiração existe, mas tem de te encontrar a trabalhar."', autor: '"Pablo Picasso"'},
    { frase: '"Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação."', autor: '"Frank Tibolt"'},
    { frase: '"Entusiasmo é a inspiração de qualquer coisa importante. Sem ele, nenhum homem deve ser temido; e com ele, nenhum homem deve ser desprezado"', autor: '"Christian Nestell Bovee"'},
    { frase: '"Só fazemos bem aquilo de que gostamos. (...) De que serve a aplicação onde é precisa a inspiração?"', autor: '"Sidonie Colette"'},
    { frase: '"Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas um grande motivo para ser feliz!"', autor: '"Desconhecido"'},
    { frase: '"As conquistas dependem de 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas."', autor: '"Augusto Cury"'},
    { frase: '"Mais que a minha própria vida, além do que eu sonhei para mim, raio de luz, inspiração, amor você é assim, rima dos versos que eu canto, imenso amor que eu falo tanto."', autor: '"Roberto Carlos"'},

]

//array das frases de empatia
var empatia = [
    {frase: '"Paz, amor e empatia!"', autor: '"Kurt Cobain"'},
    {frase: '"Amigo é mais que família, é uma empatia consentida, uma cumplicidade além dos laços sanguíneos. É uma escolha feliz de alguém que pusemos ao nosso lado para trilharmos a vida!"', autor: '"Jeocaz Lee-Meddi"'},
    {frase: '"A empatia é certamente um dos mais nobres sentimentos humanos. Para entender e ajudar o próximo é necessário se imaginar na condição dele."', autor: '"Lázaro de Souza Gomes"'},
    {frase: '"A amizade surge de uma empatia, mas sobrevive de reciprocidade."', autor: '"Ataíde Lemos"'},
    {frase: '"Não procure empatia no mundo virtual. Aqui a hipocrisia prevalece e o sentimentalismo é o que pouco importa."', autor: '"Desconhecido"'},
    {frase: '"A maior expressão de empatia é sermos compreensivos com alguém de quem não gostamos."', autor: '"Mark W. Baker"'},
    {frase: '"A prática do trabalho em equipe com respeito, lealdade, generosidade, empatia, transparência, são fatores essenciais para uma conduta Ética e vencedora."', autor: '"LEAO, J.F."'},
    {frase: '"Perceber o que as pessoas sentem sem que elas o digam constitui a essência da empatia."', autor: '"Daniel Goleman"'},
    {frase: '"Ser empático é ver o mundo com os olhos do outro e não ver o nosso mundo refletido nos olhos dele."', autor: '"Carl Rogers"'},
    {frase: '"Para trabalhar em equipe precisamos ter empatia, transparência, solidariedade e muita lealdade, esses ingredientes são necessários para o sucesso em grupo."', autor: '"Paulo França"'},
]

//array das frases de filosofia
var filosofia = [
    {frase: '"A música exprime a mais alta filosofia numa linguagem que a razão não compreende."', autor: '"Arthur Schopenhauer"'},
    {frase: '"Há mais coisas no céu e na terra, Horácio, do que sonha a tua filosofia."', autor: '"William Shakespeare"'},
    {frase: '"Um pouco de filosofia leva a mente humana ao ateísmo, mas a profundidade da filosofia leva-a para a religião."', autor: '"Francis Bacon"'},
    {frase: '"Chega sempre a hora em que não basta apenas protestar: após a filosofia, a ação é indispensável."', autor: '"Victor Hugo "'},
    {frase: '"Se queres a verdadeira liberdade, deves fazer-te servo da filosofia."', autor: '"Epicuro"'},
    {frase: '"A verdadeira filosofia nada mais é que o estudo da morte."', autor: '"Isaac Newton"'},
    {frase: '"A superstição põe o mundo em chamas, a filosofia apaga-as."', autor: '"Voltaire"'},
    {frase: '"A admiração é própria da natureza do filósofo; e a filosofia deriva apenas da estupefacção."', autor: '"Platão"'},
    {frase: '"O ensino da filosofia não precisa ser complexo, intricado. Tem a ver com curiosidade, a mania de fazer perguntas, algo que perdemos na cultura ocidental quando envelhecemos."', autor: '"Jostein Gaarder"'},
    {frase: '"Não há amor que resista a vinte e quatro horas de filosofia."', autor: '"Camilo Castelo Branco"'},
]
//------------------------------------------------------------//



//--variavel de seleção do dropdown para selecionar a array---//
var selecao;
//------------------------------------------------------------//



//-----------------------AutoComplete-------------------------//
//variavel para o autocomplete
var tema = ['amor', 'motivacao', 'inspiracao', 'empatia', 'filosofia'];

//variavel para controlar posição da letra na palavra da array
var position = 0;

//função de filtrar por letra as palavras da array
function filtro(value){

    let textDigi = document.querySelector(".card__header__text__dropdown__input").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    //verifica as letras dentro da array
    if(value.charAt(position) == textDigi.charAt(position)){
        position = position + 1;
        return value;
    }
    
}

function textUser(){

    let textDigi = document.querySelector(".card__header__text__dropdown__input").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    //varivel que se torna uma array com o filtro aplicado
    let result = tema.filter(filtro);

    if(result.length >= 5){
        position = 0;
    }

    //mostrar a palavra retornada apos alplicar o filtro
    if(result.length >= 1){
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "flex";
        for(let i = 0; i <= 5; i++){  
           document.querySelector(".list__sugestao__"+result[i]).style.display = "flex";  
        }
        
    }else{
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
        for(let j = 0; j <= 5; j++){  
            document.querySelector(".list__sugestao__"+tema[j]).style.display = "none";  
         }
    }

}

//função que adiciona o valor no campo input ao ser clicada pelo dropdown autocomplete
function inputValueSug(texto){

    let textInput = document.querySelector(".card__header__text__dropdown__input");

    //verifica qual opção selecionada 
    if(texto == "amor"){
        textInput.value = "Amor";
        selecao = amor;
        document.querySelector(".list__sugestao__amor").style.display = "none";
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
    }

    if(texto == "motivacao"){
        textInput.value = "Motivação";
        selecao = motivacao;
        document.querySelector(".list__sugestao__motivacao").style.display = "none";
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
    }

    if(texto == "inspiracao"){
        textInput.value = "Inspiração";
        selecao = inspiracao
        document.querySelector(".list__sugestao__inspiracao").style.display = "none";
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
    }

    if(texto == "empatia"){
        textInput.value = "Empatia";
        selecao = empatia;
        document.querySelector(".list__sugestao__empatia").style.display = "none";
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
    }

    if(texto == "filosofia"){
        textInput.value = "Filosofia";
        selecao = filosofia;
        document.querySelector(".list__sugestao__filosofia").style.display = "none";
        document.querySelector(".card__header__text__dropdown__sugestao").style.display = "none";
    }
}
//------------------------------------------------------------//


//-----------------------drodown button-----------------------//
//função do dropdown
function dropdown(){

    let list__dropdown = document.querySelector(".card__header__text__dropdown__list");
    let list__sugestao = document.querySelector(".card__header__text__dropdown__sugestao");

    clickDropdown = clickDropdown + 1;
    //aparece o dropdown
    if(clickDropdown == 1){
        list__dropdown.style.display = "flex";
        list__sugestao.style.display = "none"
    }

    //esconde o dropdown
    if(clickDropdown == 2){
        list__dropdown.style.display = "none";
        clickDropdown  = 0;
    }
}
//------------------------------------------------------------//


//Função para setar o valor do campo input, esconder o dropdown e selecionar a array
function inputValue(texto){

    let textInput = document.querySelector(".card__header__text__dropdown__input");

    //chama a função dropdown, passando valor 2 como parametro para esconder o dropdown
    dropdown(2);

    //verifica qual opção selecionada 
    if(texto == "amor"){
        textInput.value = "Amor";
        selecao = amor;
    }

    if(texto == "motivacao"){
        textInput.value = "Motivação";
        selecao = motivacao;
    }

    if(texto == "inspiracao"){
        textInput.value = "Inspiração";
        selecao = inspiracao
    }

    if(texto == "empatia"){
        textInput.value = "Empatia";
        selecao = empatia;
    }

    if(texto == "filosofia"){
        textInput.value = "Filosofia";
        selecao = filosofia;
    }

}
//------------------------------------------------------------//


//---Função gera frase de acordo com valor setado no input---//
function gerarFrase(){

    //conta quantas frases tem na array amor, gera um numero aleatorio conforme a quantidade de frases e converte em inteiro
    const range = Math.floor(Math.random() * selecao.length);

    let frase = document.querySelector(".main__frase__text");

    let quanti = document.querySelector(".main__quanti__text");

    let autor = document.querySelector(".main__autor__text");

    //imprime a array no index gerado pela variavel range
    document.querySelector(".main__frase__text").innerHTML = selecao[range].frase;
    document.querySelector(".main__autor__text").innerHTML = "AUTOR: " + selecao[range].autor;
    document.querySelector(".main__quanti__text").innerHTML = "FRASE: " + (range+1 + "/" + selecao.length);
}
//------------------------------------------------------------//
