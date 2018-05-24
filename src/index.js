function encode(){
    let mensaje = document.getElementById('mensaje').value;
    document.getElementById('salida').value = mensaje;
}
let procesar = document.getElementById('procesar');
procesar.addEventListener('click', function(){
    let mensaje = document.getElementById('mensaje').value;
    let accion = document.getElementById('accion').value;
    let offset = document.getElementById('offset').value;
    if (mensaje.length == 0) {
        alert('Por favor ingresar mensaje');
    } else if (accion == 0) {
        alert('Por favor ingresar accion válida');   
    } else if (offset == 0) {
        alert('Por favor ingresar clave válida');
    }else if (accion == 1){
      encode();  
    }
});   
var mensaje = "hola";
for(var i = 0; i < mensaje.length; i++){
    console.log(i);
}