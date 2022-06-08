function principal(){
    //TODO el código js asociado al click del botón
    //referenciamos las cajas
    const $numero = document.getElementById('numero')
    const $digito = document.getElementById('digito')
    //obtenemos los valores de las cajas referenciadas
    let numero = parseInt($numero.value)
    let digito = parseInt($digito.value)
    
    if(validar(numero, digito)){ // parámetros actuales //Siempre las condiciones se comparan por true
        let f = frecuencia(numero, digito)
        console.log(`La frecuencia de ${digito} en ${numero} es: ${f}`)
        //OTRA FORMA:
        //console.log(`La frecuencia de ${digito} en ${numero} es: ${frecuencia(numero, digito)}`)

    }else{
        alert('Número y/o dígito incorrectos!')
    }

}

/**
 * Función para validar los parámetros de entrada:
 * @param {num} número para contabilizar la frecuencia 
 * @param {digit} dígito buscado dentro del parámetro anterior 
 * @returns true/false dependiendo de: ambos son no vacíos y digit esta [0;9]
 */


function validar(num, digit){ // parámetros formales
   /* if(num != NaN && digit != NaN && (digit>=0 && digit <=9) )
        return true
    else    
        return false
    */
   return num != NaN && digit != NaN && (digit>=0 && digit <=9) 
   //|| con que una condición sea true ya no se evalúan las restantes
   //&& con que una condición sea false ya no se evalúan las restante,
}

function frecuencia(num, digit){
    let numStr = num.toString()
    let digitStr = digit.toString()
    let contador = 0
    for(let i = 0; i< numStr.length; i++){
        if(numStr[i] == digitStr){
            contador++
        }
    } 
    return contador;
}

