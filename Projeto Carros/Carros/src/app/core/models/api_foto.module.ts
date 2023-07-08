export async function consulta_image(modelo: string, ano: number, cor: string){
  let consulta: string = modelo + " " + ano + " " + cor;

  const url = "https://api.scaleserp.com/search?api_key=0A6333CC2DDE4201B0B7D8F29948D87A&search_type=images&q=" + consulta + "&google_domain=google.com.br&gl=br&hl=pt-br&output=json&page=1&num=1&max_page=1";
  fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    image = data.image_results[1].image;
    console.log(image);
  })
  .catch(function(error) {
    console.log(error);
  });

  return await Promise.resolve(image);
 }


export var image: string;