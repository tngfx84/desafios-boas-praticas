// 1. Mensagem de boas-vindas
console.log("Bem-vindo ao programa de Boas Práticas de Programação!");

// 2. Nome e mensagem personalizada
let nome = "Seu Nome";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

// 3. Pergunta sobre linguagem favorita
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Você gosta de ${linguagem}!`);

// 4. Soma de dois valores
let valor1 = 10;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 5. Subtração de dois valores
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6. Verificar maioridade
let idade = parseInt(prompt("Qual é a sua idade?"));
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// 7. Verificar número positivo, negativo ou zero
let numero = parseInt(prompt("Digite um número:"));
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// 8. Loop de 1 a 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 9. Verificar aprovação
let nota = 6;
if (nota >= 7) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}

// 10. Gerar números aleatórios
console.log(`Número aleatório (0 a 1): ${Math.random()}`);
console.log(`Número aleatório (1 a 10): ${Math.floor(Math.random() * 10) + 1}`);
console.log(`Número aleatório (1 a 1000): ${Math.floor(Math.random() * 1000) + 1}`);
