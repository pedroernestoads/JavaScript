//Exercício proposto que a variável 
//17. Exercício com variáveis

let varA = 'A' // B
let varB = 'B' //C
let varC = 'C' // A

//Desta forma nao funciona pois perde referencia
/*
varA = varB;
varB = varC;
varC = varA;
*/

//Esta primeira maneira cria-se a variável temporária depois realiza os cálculos internos
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//Outra maneira de aprender
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);