//Trabalhando com strings

let umaString = "Um \"texto\"";

console.log(umaString);

//     01234567
//Retorna a posição de uma tring
let umaString1 = "Um texto";

console.log(umaString1[4]);

//Se pegar alguma posição fora do range do texto retorna undefined
console.log(umaString1[8]);

//Outra função e o charAt depois que digitar a avariável digitar o . logo vai apresentar as opções
console.log(umaString1.charAt(6));

//Concatenando informações
//Mais facil utilizar templeate stream
console.log(umaString1.concat(' ', 'em', '', 'um'));
console.log(umaString1 + ' em um lindo dia.');
console.log(`${umaString1} em um lindo dia.`);

//Qual indice da palavra Texto
console.log(umaString1.indexOf('texto'));

//Ele retorna o indice -1 pois não encontrou a posição da palavra
console.log(umaString1.indexOf('Texto'));

//Começando depois do incie 3 para encontrar a palavra Um
console.log(umaString1.indexOf('Um', 3));

//Diferente que começa de tras para frente
console.log(umaString1.lastIndexOf('o'));

//Começa do indice tres de tras para frente
console.log(umaString1.lastIndexOf('m', 3));

//Expressões regulares
console.log(umaString1.match(/[a-z]/g));

console.log(umaString1.match(/[a-z]/));

//Econtra a posição da letra x ele e muito igual o search porem ele utiliza expressões regulares
console.log(umaString1.search(/x/));

console.log(umaString1.replace('Um', 'Outra'));

console.log(umaString1.replace(/Um/, 'Outra'));

//Outro Exemplo 

let umaString3 = "O rato rou a roupa do rei de roma.";

console.log(umaString3.replace(/r/g, '#'));

//Tamanho do texto
console.log(umaString3.length);

//Fatiar
console.log(umaString3.slice(2, 6));


console.log(umaString3.slice(32));
console.log(umaString3.slice(-5));
console.log(umaString3.slice(-5, umaString3.length - 1));

//Utiliza-se tambem a função substring
console.log(umaString3.substring(umaString3.length - 5, umaString3.length - 1));

console.log(umaString3.split(' '));


console.log(umaString3.split('r'));

console.log(umaString3.split('r', 2));

console.log(umaString3.split(' ', 3));

// documentos sao na w3schools javascript
// documentos mdn javascript para
// documentos ecma   (Muito avançado)

console.log(umaString3.toUpperCase());

console.log(umaString3.toLowerCase());