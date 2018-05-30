
let procesar = document.getElementById('procesar');
procesar.addEventListener('click', function(){
    let mensaje = document.getElementById('mensaje').value;
    let accion = document.getElementById('accion').value;
    let offset = document.getElementById('offset').value;
    if (mensaje.length == 0) {
        alert('Por favor ingresar mensaje');
    } else if (accion == 0) {
        alert('Por favor ingresar accion válida');   
    } else if (offset <= 0) {
        alert('Por favor ingresar clave válida');
    }else if (accion == 1){
        document.getElementById('salida').value = window.cipher.encode(mensaje, offset);
    }else if (accion == 2){
        document.getElementById('salida').value = window.cipher.decode(mensaje, offset);
    }
});  

 
