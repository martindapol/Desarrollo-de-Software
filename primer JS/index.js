function convertir(){
    let $hora = document.getElementById('hora') //caja hora
    let $minutos = document.getElementById('min') //caja min
    let $hora12 = document.getElementById('hora12') //caja min
    
    
    let hora = parseInt($hora.value) //valor de la caja hora
    let min = parseInt($minutos.value) //valor de la caja min

    if(hora <0 || hora >23){
        alert('Valor de hora incorrecto!')
        $hora.value = ''
        return
    }
    if(min <0 || min >59){
        alert('Valor de minutos incorrecto!')
        $minutos.value = '' // asignar el texto de la caja en  blanco
        return
    }

    if(hora == 0){
       hora = 12
       amPm = 'AM'
    }else {
        if(hora <12){
            //caso2:
            amPm = 'AM'
        }else{
            //caso 3:
            if(hora == 12)
                amPm = 'PM'
            else{
                //caso 4:
                hora = hora - 12
                amPm = 'PM'
            }
        }
    }
    let mensaje = `Hora[12]: ${hora}:${min} ${amPm}`   
    //console.log(mensaje)
    //alert(mensaje)
    $hora12.value = mensaje
}