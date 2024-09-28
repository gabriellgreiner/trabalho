function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
    const contatoDiv = document.getElementById('contato');

    // Verifica se os valores de peso e altura foram preenchidos corretamente
    if (!peso || !altura) {
        resultadoDiv.innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
        return;
    }

    // Cálculo do IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    // Definindo a mensagem de acordo com o IMC
    let mensagem = `Seu IMC é: ${imc}. `;
    if (imc < 18.5) {
        mensagem += "Você está abaixo do peso ideal. Recomendamos suplementos para ganho de massa muscular.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem += "Seu peso está normal. Continue mantendo uma alimentação balanceada e saudável.";
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem += "Você está com sobrepeso. Recomendamos uma dieta balanceada e exercícios físicos.";
    } else {
        mensagem += "Você está com obesidade. Recomendamos consultar um especialista em saúde.";
    }

    // Exibe o resultado na página
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;

    // Mostra a seção de contato
    contatoDiv.style.display = 'block';
}

// Adiciona o evento de envio ao formulário de e-mail
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Obrigado! Entraremos em contato pelo e-mail: ${email}`);
});
