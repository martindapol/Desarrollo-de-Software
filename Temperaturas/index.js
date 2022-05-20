function procesar() {
  let $Cantidad = document.getElementById("cantidad");
  let cantidad = parseInt($Cantidad.value);
  let t_min, t_max;
  let acumulador = 0;
  const TEMP_HIST = 43; //definir una constante

  let $btnProcesar = document.getElementById("btnProcesar");
  //deshabilitar el botón:
  $btnProcesar.disabled = true;
  console.clear(); //limpiar la consola:  
  for (let i = 0; i < cantidad; i++) {
    //temp varía entre [0, 49]
    let temp = Math.floor(Math.random() * 50); //es un valor que esta en el intervalo [0;1)
    console.log(temp)
    //procesar las temperaturas:
    acumulador += temp;
    if (i == 0) {
      t_max = t_min = temp;
    } else {
      if (temp > t_max) t_max = temp;

      if (temp < t_min) t_min = temp;
    }
  } //fin del for:
  console.log('\nRESULTADOS')
  let amplitud = t_max - t_min;
  let promedio = acumulador / cantidad;
  //MOSTRAR RESULTADOS:
  console.log(`Amplitud térmica: ${amplitud}ºC`);
  console.log(`Temperatura promedio: ${promedio.toFixed(2)}ºC`);
  console.log(
    `Temperatura Histórica alcanzada?: ${t_max > TEMP_HIST ? "Si" : "No"}`
  );

  $btnProcesar.disabled = false; //habilitar nuevamente el botón
}
