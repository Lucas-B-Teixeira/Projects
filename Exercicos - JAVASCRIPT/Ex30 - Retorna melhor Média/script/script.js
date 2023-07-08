
//ver no console log do google
function retornaMedia(obj){

  let media = 0;

  let maiorMedia = 0;

  for(let i = 0; i < Object.keys(obj).length; i++){
    for(let j = 0; j < Object.values(obj)[i].length; j++){
      media = (media + Object.values(obj)[i][j]);
    }
    if(media / Object.values(obj)[i].length > maiorMedia){
      maiorMedia = media / Object.values(obj)[i].length;
      result = { nome: Object.keys(obj)[i], media: maiorMedia}
    }
    media = 0;
  }

  return result;

}
