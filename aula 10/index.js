//Dados primitivos String, number, undefined (quando nao inicializa a variavel), null(nao aponta para nenhum luar na memoria), boolean (valor logico), symbol
const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; // number
const num2 = 10.52 // number
let nomeAluno; //undefined = não aponta pra local nehuma na memória
const sobrenomeAluno = null; //Nulo -> não apont pra local nenhum na memória
const aprovado = false; //Boolean = true, false (lógico)

//Primitivo e passado por referencia

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);