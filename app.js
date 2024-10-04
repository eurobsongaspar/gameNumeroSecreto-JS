let nome = prompt('Olá, seja bem-vindo ao jogo de adivinhar números. Para condinuar, digite o seu nome!');
let numeroSecreto = 25;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt (`Ok, ${nome}. Escolha um número entre 1 e 30`);
    // Se o chute foir IGUAL ao número secreto
    if (numeroSecreto == chute){
        alert(`Opa! Você acertou com apenas ${tentativas} tentativas!`);
    } else {
        if(chute > numeroSecreto){
            alert(`${nome}, o número secreto é menor que ${chute}`);
        } else {
            alert(`${nome}, o número secreto é maior que ${chute}`);
        };
        
        tentativas++;
}
};