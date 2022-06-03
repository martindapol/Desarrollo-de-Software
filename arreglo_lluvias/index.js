function procesar(){
    let $cant = document.getElementById("cant");
    let cant = parseInt($cant.value) // convertir la cadena en numero entero
    


    if(cant > 0){
        let suma = 0
        let aviso = false
        let maxima, minima
        const temperaturas = []
        //Procesar las temperaturas:
        console.clear();
        for(let i = 0; i < cant; i++){
            let lectura = parseFloat((Math.random()*50).toFixed(1)) 
            temperaturas.push(lectura)
            //precipitaciones.push(lectura)
            suma += lectura

            if(lectura > 43){
                aviso = true
            }

            if(i == 0){
                maxima = minima = lectura
            }else{
                if(lectura > maxima)
                    maxima = lectura
                else if(lectura < minima)
                    minima = lectura
            }

        }//fin for:
        console.log(`Lecturas: ${temperaturas}` )
        console.log('Primer temperatura: ' +  temperaturas[0])
        console.log('Ultima temperatura: ' +  temperaturas[cant-1])
        
        console.log(`Lecturas superiores a 20º: ${temperaturas.filter(e=>e>20)}` )
        
        let amplitud = maxima - minima
        console.log(`Temperatura promedio: ${(suma/cant).toFixed(1)}º`)
        console.log(`Amplitud térmica: ${amplitud}º`)        
        
        if(aviso == true)
            console.log('Temperatura histórica alcanzada!')

    }else{
        alert('Valor incorrecto para la cantidad!')
    }







    //crear arreglo:
    //const precipitaciones = new Array()
   
    //llenar arreglo con lecturas de precipitaciones aleatorias:
   

    //$lluvias.value = precipitaciones.toString()

    //promedio anual de lluvias:   
    //let promedioAnual = (suma /12).toFixed(2)
    //console.log(`PROMEDIO ANUAL ${promedioAnual} mm.`)




}