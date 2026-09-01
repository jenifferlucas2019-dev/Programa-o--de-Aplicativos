let usuarios = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 17 },
    { nome: "Pedro", idade: 30 },
    { nome: "Ana", idade: 16 }
];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade >= 18) {
        console.log(usuarios[i]);
    }
}
