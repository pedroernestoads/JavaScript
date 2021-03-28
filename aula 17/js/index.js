//20.
//repetições

let num1 = 10.57895512555547; //number
let num2 = 2.5; ///number 
let num3 = '5';

console.log(Number.isInteger(num1));

let temp = num1 + num3;
console.log(temp);
console.log(Number.isNaN(temp));

//Representação binária
console.log(num1.toString(2));

//Somente mostrar algumas casas decimais (arredonddado para cima)
console.log(num1.toFixed(2));
console.log(num1.toFixed(4));

//somente utiliza no console a conversao porem o numero original ainda continua como numero
console.log(num1.toString() + num2);
console.log(typeof num1);

//Outro tipo de conversão realmente converte para string
num1 = num1.toString();
console.log(typeof num1);


//Flutuante
num1 = parsefloat(num1.toFixed(2));

console.log(num1);
console.log(Number.integer(num1));

//Resolvendo a imprecisao
num1 = Number(num1.toFixed(num1));