//Exercicio 22.
const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

//Limpando
texto.innerHTML = '';

texto.innerHTML = `<p>Seu número +2 é ${numero + 2}</p>`;
//Raiz Quadrada
texto.innerHTML += `<p>A raiz do número é ${Math.sqrt(numero)}</p>`;
//Se o numero e um numero inteiro que
texto.innerHTML += `<p>O numero ${numero} e inteiro: ${Number.isInteger(numero)}</p>`;
//Se é um NUM
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
//Arredondar para baixo
texto.innerHTML += `${Math.floor(numero)}`;
//Arredondar para cima
texto.innerHTML += `${Math.ceil(numero)}`;
//Arredondar com duas casa decimais
texto.innerHTML += `<p>O numero com duas casa decimais é ${numero.toFixed(2)}</p>`;