let nome = prompt('Olá, seja bem-vindo ao jogo de adivinhar números. Para condinuar, digite o seu nome!');
let numeroSecreto = 25;
let chute = prompt (`Ok, ${nome}. Escolha um número entre 1 e 30`);
// Se o chute foir IGUAL ao número secreto
if (numeroSecreto == chute){
    alert('Opa! Você acertou');
} else {
    alert(`Você errou! O número secreto é ${numeroSecreto}`);
};