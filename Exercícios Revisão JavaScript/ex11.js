let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

carro.cor = "Preto";
console.log(carro);

delete carro.ano;
console.log(carro);
