
// importar a biblioteca implementada com as funções de gerenciamento de histórias criadas no gerenciador-histoias.js
import * as functions from './functions.js';
import readline from "readline";

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inserir(){
    let sistema, title, intro, text, resp, dataConclu, results, anexos;
    rl.question("Digite o nome do sistema que você deseja INSERIR uma nova história\n", sis => {
        sistema = sis;
    
        rl.question("Digite o Titulo da história\n", tit => {
            title = tit;
        
            rl.question("Digite a introdução da história\n", intr => {
                intro = intr;
            
                rl.question("Digite o texto da história\n", tex => {
                    text = tex;
                
                    rl.question("Digite o responsável da história\n", res => {
                        resp = res;
                    
                        rl.question("Digite a data de conclusão da história\n", datac => {
                            dataConclu = datac;
                        
                            rl.question("Digite o resultado da história\n", result => {
                                results = result;
                            
                                rl.question("Digite o caminho de anexos da história\n", anexo => {
                                    anexos = [anexo];
                                    functions.insert(sistema, title, intro, text, resp, dataConclu, results, anexos);
                                    console.log("--------------------------------------------------");
                                    chatBot();
                                })
                            })
                        })
                    })
                })
            })
        })
    }) 
}
function listar(){
    console.log("----------------As Histórias são LISTADAS pelo Titulo!---------------------\n")
    functions.list()
    console.log("--------------------------------------------------");
    chatBot();
}
function buscar(){
    rl.question("Digite o Titulo da Historia que deseja BUSCAR\n", title => {
        functions.search(title);
        console.log("--------------------------------------------------");
        chatBot();
    })
}
function deletar(){
    rl.question("Digite o Titulo da Historia que deseja REMOVER\n", title => {
        rl.question("Você tem certeza que deseja excluir a história (" + title + ") (Y/N)", resposta => {
            if(resposta == "Y" || "y" || "yes" || "YES" || "Yes"){
                functions.del(title);
                console.log("--------------------------------------------------");
                chatBot();
            }else if(resposta == "N" || "n" || "no" || "NO" || "No"){
                console.log("A História não será removida !\n")
                console.log("--------------------------------------------------");
                chatBot();
            }else{
                console.log("Não foi possível compreender a resposta e por isso, não será removida!\n")
                console.log("--------------------------------------------------");
                chatBot();
            }
        }) 
    })
}

function chatBot(){
    console.log("\nO que você deseja?\n")
    console.log("1 - INSERIR nova história")
    console.log("2 - LISTAR histórias")
    console.log("3 - BUSCAR história")
    console.log("4 - REMOVER história")
    console.log("Para fechar o serviço, aperte Ctrl+C")

    rl.question("\nPor favor, digite o NÚMERO da opção deseja !\n", opcao => {
        if(opcao == 1){
            inserir();
        }
        
        else if(opcao == 2){
            listar();
        }
        
        else if(opcao == 3){
            buscar(); 
        }
        
        else if(opcao == 4){
            deletar();
        }

        else{
            console.log("Digite um NÚMERO Valido");
        }
    })
}

console.log("\n---------------------Olá, sou o Gerenciador de Histórias da FORD-----------------------\n");
chatBot();




