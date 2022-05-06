function procesar(){
    let $cantidad = document.getElementById('cantidad')
    let cantidad = parseInt($cantidad.value)

    if(cantidad == NaN)
    {
        alert('Debe ingresar un valor numérico!')
        return   
    }

    let contador = 0
    let contPares = 0, contImpares = 0
    let aviso0 = false //bandera para avisar que pasó el cero
    let anterior = null
    let paridad = null
    let paridadAnterior = null
    let avidoSecuenciaAlterados = true

    while(contador < cantidad){ //se evalua de 0 a cantidad-1
        //un valor  entero [0, 100]
        let rand = Math.floor(Math.random() * 101) //Math.random() genera un valor de probabilidad [0;1) 
        console.log(rand)
        //validamos paridad del aleatorio generado:
        
        paridad = rand % 2 == 0
        if(paridad == true) // equivale a if(paridad)
            contPares++
        else
            contImpares++
        
        if(rand == 0)
            aviso0 = true

        paridadAnterior = anterior%2 == 0     
        if(paridad == paridadAnterior)
            avidoSecuenciaAlterados = false


        anterior = rand
        contador++ // contador = contador + 1
    }//fin del while:

    //RESULTADOS:
    console.log('Cantidad de pares: ' + contPares)
    console.log('Cantidad de impares: ' + contImpares)
    if(aviso0 == true)
        console.log('Pasó al menos una vez el 00')
    else    
        console.log('NO pasó al menos una vez el 00')

   // if(avidoSecuenciaAlterados == true)
   //     console.log('Paso alternancia PAR/IMPAR')
   
   console.log('Hubo alternancia PAR/IMPAR ?: ' + ((avidoSecuenciaAlterados===true) ? 'SI': 'NO'))
}