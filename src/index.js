function encode(mensaje, offset){
    var mensajeCifrado = '';
    for (var i = 0; i < mensaje.length; i++){
        var x = mensaje.charCodeAt(i);
        if(x >= 65 && x <= 90 ){
            var letraCifrada = (x - 65 + parseInt(offset)) % 26 + 65;
            mensajeCifrado += String.fromCharCode(letraCifrada);
        }else if(x >=97 && x <= 122){
            letraCifrada = (x - 97 + parseInt(offset)) % 26 + 97;
            mensajeCifrado += String.fromCharCode(letraCifrada);
        }else if(x >= 48 && x <=57){
            letraCifrada = (x - 48 + parseInt(offset)) % 26 + 48;
            mensajeCifrado += String.fromCharCode(letraCifrada);
        }else {
                mensajeCifrado += String.fromCharCode(x);
        }
    }
    
    document.getElementById('salida').value = mensajeCifrado;
}
function decode(mensaje, offset){
    var mensajeDescifrado = '';
    for (var e = 0; e < mensaje.length; e++){
        var y = mensaje.charCodeAt(e);
        if (y >= 65 && y <= 90){
            var letraDescifrada = (y - 65 - parseInt(offset)) % 26 + 65;
            mensajeDescifrado += String.fromCharCode(letraDescifrada);
        }else if(y >= 97 && y <= 122){
            letraDescifrada = (y - 97 - parseInt(offset)) % 26 + 97;
            mensajeDescifrado += String.fromCharCode(letraDescifrada);
        }else if(y >= 48 && y <=57){
            letraDescifrada = (y - 48 - parseInt(offset)) % 26 + 48;
            mensajeDescifrado += String.fromCharCode(letraDescifrada);
        }else{
                mensajeDescifrado += String.fromCharCode(y);
        }    
    }

    document.getElementById('salida').value = mensajeDescifrado;
}
let procesar = document.getElementById('procesar');
procesar.addEventListener('click', function(){ debugger
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
    }else if (accion == 2){
      decode(mensaje, offset);
    }
});  

 
