// let nota1 = 10;
// let nota2 = 9;
// let nota3 = 8.5;
// let nota4 = 9.8;

function calcularMedia(notas) {
   let resultado = notas[0] + notas[1] + notas[2] + notas[3];

   let media = resultado/4;

   return media.toFixed(1);
}

let mediaG = calcularMedia([10,9.8,7,10]);
alert("Média do Gleidson: " + mediaG);

let mediaA = calcularMedia([10,9,8.5,9.8]);
alert("Média do Ale: " + mediaA);

let mediaM = calcularMedia([7,8,9,10]);
alert("Média do Maritana: " + mediaM);


// let notas = [
//     10,
//     9,
//     8.5,
//     9.8,
// ];

// let resultado = notas[0] + notas[1] + notas[2] + notas[3];
//   alert(resultado/4);


//   let notasG = [
//     10,
//     9.8,
//     7,
//     10,
// ];

// let resultadoG = notasG[0] + notasG[1] + notasG[2] + notasG[3];
//   alert(resultadoG/4);

