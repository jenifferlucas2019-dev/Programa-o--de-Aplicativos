let numeros = [3, 7, 15, 19, 53, 6, 5, 30, 34, 9];

let resultado = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
        resultado.push("FizzBuzz");
    } else if (numeros[i] % 3 === 0) {
        resultado.push("Fizz");
    } else if (numeros[i] % 5 === 0) {
        resultado.push("Buzz");
    } else {
        resultado.push(numeros[i]);
    }
}

console.log(resultado);
