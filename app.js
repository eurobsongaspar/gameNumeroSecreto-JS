let nome = prompt('Olá, seja bem-vindo ao jogo de adivinhar números. Para continuar, digite o seu nome!');
let numeroSecreto = Math.floor(Math.random() * 5) + 1; // Cria um número rondômico entre 1 e 10
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt (`Ok, ${nome}. Escolha um número entre 1 e 5`);
    // Se o chute foir IGUAL ao número secreto
    if (numeroSecreto == chute){
        alert(`| ${numeroSecreto} | Você acertou com apenas ${tentativas} tentativa(s)! Parabéns, ${nome}!`);
    } else {
        if(chute > numeroSecreto){
            alert(`${nome}, o número secreto é menor que ${chute}`);
        } else {
            alert(`${nome}, o número secreto é maior que ${chute}`);
        };

        tentativas++;
}
};