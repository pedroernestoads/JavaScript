//21. Matematicos  (Math)


let num1 = 9.54578;
//let num2 = Math.floor(num1); //arrendondamento para baixo
//let num2 = Math.ceil(num1); //arrendondamento para baixo
//let num2 = Math.round(num1); //arredondamento para o proximo
//console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); //Encontra o maior número de uma sequencia
//console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); //Encontra o menor número de uma sequencia

console.log(Math.random()); // Retorna um aleatorio entre 0 e 1

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Numero aleatorio entre 10 e 5 e arredondado

console.log(aleatorio);

console.log(Math.PI); // Numero de PI

console.log(Math.pow(2, 10)); // Dois elevado a 10


//Raiz quadrada de um determinado número utilizando duas formas

let num2 = 9
console.log(num2 ** (1 / 2));

console.log(num2 ** 0.5);

//Atenção aqui podemos dividir um numero por zero de
console.log(100 / 0);

console.log(!!(100 / 0));