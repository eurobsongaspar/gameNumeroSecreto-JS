let nome = prompt('Olá, seja bem-vindo ao jogo de adivinhar números. Para continuar, digite o seu nome!');
let numeroMaximo = 20;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) ;// Cria um número rondômico entre 1 e 10
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt (`Ok, ${nome}. Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute foir IGUAL ao número secreto
    if (numeroSecreto == chute){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`${nome}, o número secreto é menor que ${chute}`);
        } else {
            alert(`${nome}, o número secreto é maior que ${chute}`);
        };

        tentativas++;
    }
};

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert (`| ${numeroSecreto} | Você acertou com apenas ${tentativas} ${palavraTentativa}. Parabéns, ${nome}!`);



    /*if (tentativas > 1) {
        alert (`| ${numeroSecreto} | Você acertou com apenas ${tentativas} tentativas! Parabéns, ${nome}!`);
    } else {
        alert (`| ${numeroSecreto} | Você acertou com apenas ${tentativas} tentativa! Parabéns, ${nome}!`);
    };*/