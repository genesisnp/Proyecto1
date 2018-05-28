function encode(mensaje, offset){
    var mensajeCifrado = '';
    for (var i = 0; i < mensaje.length; i++){
        var x = mensaje.charCodeAt(i);
        if(x == 32){
            mensajeCifrado += String.fromCharCode(32);
        }else{
            var letraCifrada = (x - 65 + parseInt(offset)) % 26 + 65;
            mensajeCifrado += String.fromCharCode(letraCifrada);
        }
        
    }
    
    document.getElementById('salida').value = mensajeCifrado;
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
    } else if (offset <= 0) {
        alert('Por favor ingresar clave válida');
    }else if (accion == 1){
      encode(mensaje, offset);  
    }
<<<<<<< HEAD
});  

 
=======
});   
>>>>>>> 583a9b6bbed5eddf275899ce193685fcd0139595
