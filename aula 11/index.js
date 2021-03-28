/**
 * Operadores aritiméticos 
 * + Adição / Concatenação 
 * - / * 
 * % Resto da divisão
 */


//Soma comum
const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

//Concatenação quando um dos número for string

const num1 = '5';
const num2 = 10;

console.log(num1 + num2);


//Divisão
const num1 = 5;
const num2 = 10;

console.log(num1 / num2);

//Multiplicação
const num1 = 5;
const num2 = 10;

console.log(num1 * num2);

//Potenciação

const num1 = 5;
const num2 = 10;

console.log(num1 ** num2);

//Porcentagem -> Retorna o resto da divisão

const num1 = 10;
const num2 = 3;

console.log(num1 % num2);

//Outro exemplo porem o resto quando e zero

const num1 = 10;
const num2 = 5;

console.log(num1 % num2);

/**Procedencias dos cálculos
  ()
  ** 
  * / %
  + -
**/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);


//Se for da mesma precedencia será realizado em sequencia normal
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3);

//Contador   (Pós)
let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

//Outra forma do Contador escrito ++ na frente (Pré)
let contador = 1;
++contador; //2
++contador; //3
++contador; //4
++contador; //5
console.log(contador);


/*A o incrmento de mais um porem e realizado após por isto não e demonstrado na primeira linha do console
somente é apresentado na próxima linha*/
let contador = 1;
console.log(contador++);
console.log(contador);

//Pré incremento  = ++
let contador = 1;
console.log(++contador);
console.log(contador);


//Pré de decremento = --
let contador = 10;
console.log(--contador);
console.log(--contador);

//Desta forma nao faz diferença se e pos ou pré
let contador = 1;
contador++;
console.log(contador);


//Contador---------------------------------------------

//Demonstração de um contador simples
const passo = 2;
let contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);


//         OPERADORES DE ATRIBUIÇÃO


//Outra forma de realizar o contador so que mais rápido (curto)
let contador = 50;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);


//Fazendo contador so que uma forma de multiplicação
let contador = 2;
contador *= 2;
contador *= 2;
contador *= 2;
console.log(contador);

//Dois elevado a dez

let contador = 2;
contador **= 10;
console.log(contador);

//Se for numero e texto vai ter um erro inesperado
// NaN - Not a number
//Em alguns casos ele resolve
const num1 = 10;
const num2 = 'Luiz'
console.log(num1 * num2);

//Realizando a conversão para número inteiro (inteiro)
const num1 = 10;
const num2 = parseInt('5'); //Realiza a converão do texto para numero
console.log(num1 + num2);
console.log(num2);

//Realizando a conversão de número flutuante (decimais)
const num1 = 10;
const num2 = parseFloat('5.2'); //Realiza a converão do texto para numero
console.log(num1 + num2);
console.log(num2);

//Realiza a conversao para tipo de número (não importa se é número inteiro ou flutuante)
const num1 = 10;
const num2 = Number('5.2'); //Realiza a converão do texto para numero
console.log(num1 + num2);
console.log(num2);