window.cipher = {
    encode: (mensaje, offset) => {
        var mensajeCifrado = '';
        for(var i = 0; i < mensaje.length; i++){
            var x = mensaje.charCodeAt(i);
            if(x >= 65 && x <= 90){
                var letraCifrada = (x - 65 + parseInt(offset)) % 26 + 65;
                mensajeCifrado += String.fromCharCode(letraCifrada);
            }else if(x >= 97 && x <= 122){
                letraCifrada = (x - 97 + parseInt(offset)) % 26 + 97;
                mensajeCifrado += String.fromCharCode(letraCifrada);
            }else if(x >= 48 && x <=57){
                letraCifrada = (x - 48 + parseInt(offset)) % 10 + 48;
                mensajeCifrado += String.fromCharCode(letraCifrada);
            }
        }
        return mensajeCifrado;
    },
    decode: (mensaje, offset) => {
        var mensajeDescifrado = '';
        for(var e = 0; e < mensaje.length; e++){
            var y = mensaje.charCodeAt(e);
            if(y >= 65 && y <= 90){
                var letraDescifrada = (y - 90 - parseInt(offset)) % 26 + 90;
                mensajeDescifrado += String.fromCharCode(letraDescifrada);
            }else if(y >= 97 && y <= 122){
                letraDescifrada = (y - 122 - parseInt(offset)) % 26 + 122;
                mensajeDescifrado += String.fromCharCode(letraDescifrada);
            }else if(y >= 48 && y <=57){
                letraDescifrada = (y - 57 - parseInt(offset)) % 10 + 57;
                mensajeDescifrado += String.fromCharCode(letraDescifrada);
            }    
        }
        return mensajeDescifrado;
    },
    createCipherWithOffset: (offset) => {
        let resultadOffset = {
            encode: (mensaje) => cipher.encode(mensaje,offset),
            decode: (mensaje) => cipher.decode(mensaje,offset)
        }
        return resultadOffset;
    }      
}
    
 



