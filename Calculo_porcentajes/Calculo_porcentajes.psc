Algoritmo Calculo_porcentajes
	Definir cant_enfermos,cant_habitantes Como Entero
	Definir porcentaje Como Real
	Escribir 'Ingrese el total de habitantes del país'
	Leer cant_habitantes
	Escribir 'Ingrese el total de enfermos del país'
	Leer cant_enfermos
	porcentaje <- (cant_enfermos/cant_habitantes)*100
	Escribir 'El porcentaje de enfermo en el país es de: ',porcentaje,'%'
FinAlgoritmo
