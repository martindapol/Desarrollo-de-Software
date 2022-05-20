function procesar(){
    let $lluvias = document.getElementById("lluvias");
    //crear arreglo:
    const precipitaciones = new Array()
    let suma = 0
    //llenar arreglo con lecturas de precipitaciones aleatorias:
    for(let i = 0; i < 12; i++){
        let lectura = 15  + Math.floor(Math.random()*21)
        precipitaciones.push(lectura)
        suma += lectura
    }   

    $lluvias.value = precipitaciones.toString()

    //promedio anual de lluvias:   
    let promedioAnual = (suma /12).toFixed(2)
    console.log(`PROMEDIO ANUAL ${promedioAnual} mm.`)




}