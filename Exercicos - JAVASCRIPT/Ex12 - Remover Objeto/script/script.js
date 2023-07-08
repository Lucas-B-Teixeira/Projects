
//ver no console log do google
function retornaObj(obj, exc){

  Reflect.deleteProperty(obj, exc);

  return obj;

}