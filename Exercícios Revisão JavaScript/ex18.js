let usuarios = [
    { nome: "João", sobrenome: "Silva" },
    { nome: "Maria", sobrenome: "Souza" },
    { nome: "Pedro", sobrenome: "Santos" }
];

let nomesCompletos = [];

for (let i = 0; i < usuarios.length; i++) {
    let nomeCompleto = usuarios[i].nome + " " + usuarios[i].sobrenome;
    nomesCompletos.push(nomeCompleto);
}

console.log(nomesCompletos);
