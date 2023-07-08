import {FILE_PATH_BASE} from './config.js';
import fs from "fs";


var result = JSON.parse(fs.readFileSync(FILE_PATH_BASE));


//----------------------------------------
export function insert(sistema, title, intro, text, resp, dataConclu, results, anexos){
    
    let data = {
        "titulo": title,
        "introducão": intro,
        "texto": text,
        "responsável": resp,
        "data_conclusão": dataConclu,
        "resultados": results,
        "anexos": anexos
    };

    for(let i = 0; i < result[0].sistemas.length; i++){
        if(sistema == result[0].sistemas[i].nome){
            result[0].sistemas[i].historias.push(data);
        } 
    };

    fs.writeFileSync(FILE_PATH_BASE, JSON.stringify(result, null, 4));

}
//----------------------------------------z
//----------------------------------------
export function search(title){
    for(let i = 0; i < result[0].sistemas.length; i++){
        for(let j = 0; j < result[0].sistemas[i].historias.length; j++){
            if(title == result[0].sistemas[i].historias[j].titulo){
                console.log(result[0].sistemas[i].historias[j]);
            }
        }
    }

}
//----------------------------------------

//----------------------------------------
export function list(){
    for(let i = 0; i < result[0].sistemas.length; i++){
        for(let j = 0; j < result[0].sistemas[i].historias.length; j++){
            console.log(result[0].sistemas[i].historias[j].titulo);
        }
    }

}
//----------------------------------------

//----------------------------------------
export function del(title){
    for(let i = 0; i < result[0].sistemas.length; i++){
        for(let j = 0; j < result[0].sistemas[i].historias.length; j++){
            if(title == result[0].sistemas[i].historias[j].titulo){
                result[0].sistemas[i].historias.splice(j, 1);
            }
        }
    }
    fs.writeFileSync(FILE_PATH_BASE, JSON.stringify(result, null, 4));

}
//----------------------------------------
