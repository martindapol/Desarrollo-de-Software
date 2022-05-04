function invertir(){
    let inputCifra = document.getElementById("numero")
    let inputCifraInv = document.getElementById("invertido")
    let cifra = inputCifra.value
    let cifrainvertida = null

    if(cifra < 100 || cifra > 999){
        alert("Por favor ingrese un valor valido.")
        return;
    }
    cifrainvertida = cifra[2] + cifra[1] + cifra[0]
    if(cifrainvertida == cifra){
        alert("El Numero original y el invertido son el mismo.")
    }
    inputCifraInv.value = cifrainvertida
}
