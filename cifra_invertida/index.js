function invertir(){
    let inputCifra = document.getElementById("numero")
    let inputCifraInv = document.getElementById("invertido")
    let cifra = inputCifra.value
    let cifrainvertida = null

    
    if(cifra < 100 || cifra > 999){
        alert("Por favor ingrese un valor valido.")
        return;
    }
    
    let valorNumero =  parseInt(cifra)
    let centena = parseInt(valorNumero/100)
    let decena = parseInt(valorNumero%100/10)
    let unidad = parseInt(valorNumero%100)%10
    
    //cifrainvertida = cifra[2] + cifra[1] + cifra[0]
    cifrainvertida = unidad.toString() + decena.toString() + centena.toString()
    if(cifrainvertida == cifra){
        alert("El Numero original y el invertido son el mismo.")
    }
    inputCifraInv.value = cifrainvertida
}
