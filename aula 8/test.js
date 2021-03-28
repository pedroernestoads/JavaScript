//Este Exercico tem com objetivo escrever conforme a frase apresentado a baixo
/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso/ (altura * altura)
let anoNascimento;


imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso);
console.log('kg tem', altura, 'de altura e seu índice de massa corporal é de', imc, nome, sobrenome, 'nasceu em', anoNascimento);

//outra maneira -> template strings

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso);
console.log('kg tem ' + altura + ' de altura e seu índice de massa corporal é de ' + imc + ' ' + nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);

//Outro tipo de escrever e a utilização de $ na variável
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}`);
console.log(`kg tem ${altura} de altura e seu índice de massa corporal é de ${imc} ${nome} ${sobrenome} nasceu em ${anoNascimento}`);