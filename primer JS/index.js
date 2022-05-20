function convertir(){
    let $hora = document.getElementById('hora') //caja hora
    let $minutos = document.getElementById('min') //caja min
    
    let hora = parseInt($hora.value) //valor de la caja hora
    let min = parseInt($minutos.value) //valor de la caja min

    if(hora <0 || hora >23){
        alert('Valor de hora incorrecto!')
        return
    }
    if(min <0 || min >59){
        alert('Valor de minutos incorrecto!')
        return
    }

    if(hora == 0){
        //caso 1:
        
    }else {
        if(hora <12){
            //caso2:

        }else{
            //caso 3:

        }
    }


}