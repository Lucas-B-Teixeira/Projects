
//ver no console log do google
function retornaArray(repete, vezes){
    
    let array = [repete];

    for(let i = array.length; i < vezes; i++){
        array.push(repete);
    }

    return array;
}