function procesar(){ //este es mi programa principal

    //tomar las entradas:
    let inputHora = document.getElementById('hora')
    let inputMin = document.getElementById('minutos')
    let inputHora12 = document.getElementById('hora12')

    let valorHr = parseInt(inputHora.value) //obtiene un entero a partir de una cadena: "2"->2
    let valorMin = parseInt(inputMin.value)
    let valorHr12 = 0
    let amPm = 'AM'

    //validaciones extra para valores fuera de rango:
    if(valorHr<0 || valorHr>23){
        alert('Valor de horas incorrecto!')
        return
    }

    if(valorMin<0 || valorMin>59){
        alert('Valor de minutos incorrecto!')
        return
    }

    //Procesar las entradas:
    if(valorHr == 0){
        //0:
        valorHr12 = valorHr + 12
    }else{
        //1 a 12:
        if(valorHr >0 && valorHr <=11){
            valorHr12 = valorHr
        }else{
            amPm = 'PM'
            if (valorHr == 12){
                valorHr12 = valorHr          
            }else{
                 //13 a 23:
                 valorHr12 = valorHr - 12
            }
        }
    }

    //Mostrar los resultados:
    let horaFormato12 = `${valorHr12}:${valorMin} ${amPm}`
    inputHora12.value = horaFormato12
}   