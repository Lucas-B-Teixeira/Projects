## 1 - Consultar user case
Analisar com cautela todos os itens do user case para que não falte nenhum item solicitado.
Após cada task concluída, consultar user case para manter os requisitos fresco na memória.

## 2 - Criar arquivos
Criar arquivo dos módulos e interface grafica
- adicionar.js
- buscar.js
- listar.js
- remover.js
- index.html(adicional)
- style.css(adicional)

## 3 - Importar libs
Importar todas as libs necessarias para a execução do projeto, no arquivo principal(app.js) e nos modulos(adicionar.js, buscar.js, listar.js e remover.js)
modulo principal --- "fs"

## 4 - Desenvolver o Código para adicionar histórias no JSON
no modulo adicionar.js, importar o modulo historias.json e fs
a pricipal função a ser utilizada será o push()
essa função será responsavél por adicionar novas histórias no arquivo json
requisitos para adicionar nova história:
- titulo
- descrição
- responsável pelo teste
- data de conclusão 
- resultados obtidos. 
A aplicação também deve permitir aos engenheiros adicionar anexos, como imagens e relatórios de teste, às histórias

## 5 - Desenvolver o código para buscar histórias
no modulo buscar.js, importar o modulo historias.json
a pricipal função a ser utilizada será o parse() pelo titulo
essa função será responsavel por retornar o resultado de buscar pelo titulo no arquivo json
se a história existir ela é exibida para o usuario, caso contrario retornará erro.

## 6 - Desenvolver o código para listar 
no modulo listar.js, importar o modulo historias.json
essa função será responsavel por apresentar todas as historias do arquivo json para o usuario em forma de lista

## 7 - Desenvolver o código para remover histórias do arquivo json
no modulo remover.js, importar o modulo historias.json
a principal função a ser utilizada será delete
essa função tem por objetivo remover a historia que o usuario deseja através do titulo

## 8 - Desenvolver o código app.js
no arquivo principal, importar os modulos adicionar.js, buscar.js, listar.js, remover.js e histórias.json
o código será composto por questionário ao usuario, ou seja, o código irá pergunstar para o usuario oque ele deseja fazer.
por exemplo:
bot: "Olá, sou o bot de historias"
bot: "por favor, tecle a opção(número) desejada"
bot: "1 - inserir, 2 - remover, 3 - buscar, 4 - todas historias"
user: "2"
bot: "por favor, digite o titulo da hisatoria que deseja remover"
user: "Teste do sistema de navegação em condições climáticas adversas"
bot: "historia removida com sucesso"
bot: "por favor, tecle a opção(número) desejada"
bot: "1 - inserir, 2 - remover, 3 - buscar, 4 - todas historias"
...
as função dos modulos serão chamadas de acordo com oque o usuario deseja.

## 9 - Desenvolver uma interface grafica (opcional)
no arquivo index.html deverá ser escrito todo o codigo html da página, que deverá conter:
botão para selecionar opção com ou sem interface grafica.
na interface grafica:
seções com cada tema(Sistema de navegação, Sistema de sensores, Sistema de frenagem, Sistema de direção, Sistema de comunicação, Sistema de bateria)
cards de pre-visualização de cada tema com foto, titulo e breve descrição, ao clicar irá ser redirecionado para a pagina completa referente a historia.
botão para inserir nova história com check-box de tema, campo de titulo e descrição, responsavél, data de conclusão, inserir foto do card e anexos.
ao colocar na opção "sem interface grafica" o arquivo se comportará como no item ## - 8 da lista
## 10 - Desenvolver css
cores padrões azul, laranja e branco

## 11 - Criar novo arquivo js
Criar arquivo Index.js para interação correta com o usuario a partir do html

## 12 - Desenvolver o código do Index.js
no arquivo principal, importar os modulos adicionar.js, buscar.js, listar.js, remover.js e histórias.json
irá interagir com o usuario através do html da página, chamanda as respectivas funções de acordo com o que o usuario solicitar

## 13 - TESTE
testar todas as funções com ou sem interface grafica.

