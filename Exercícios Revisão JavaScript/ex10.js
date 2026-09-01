function tamanhoString(texto) {
    if (texto.length <= 5) {
        console.log("A string '" + texto + "' é pequena.");
    } else if (texto.length <= 10) {
        console.log("A string '" + texto + "' é média.");
    } else {
        console.log("A string '" + texto + "' é grande.");
    }
}

tamanhoString("aplicativos");
