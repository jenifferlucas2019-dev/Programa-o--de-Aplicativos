let usuarios = [
    { nome: "João", idade: 15, temPet: true },
    { nome: "Maria", idade: 20, temPet: true },
    { nome: "Pedro", idade: 17, temPet: false },
    { nome: "Ana", idade: 16, temPet: true }
];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade < 18 && usuarios[i].temPet === true) {
        console.log(usuarios[i]);
    }
}
