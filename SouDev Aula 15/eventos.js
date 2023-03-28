let idade = prompt("Olá, qual a sua idade?"); /*prompt pega uma informação*/

alert("Que legal, você tem " + idade); /*alert mostra a informação*/

// if (idade < 14) {
//    alert("Você é uma criança!");
// }

// if (idade >= 14 && idade < 18) {
//    alert("Você é um adolescente!");
// }

// if (idade >= 18 && idade < 60) {
//     alert("Você é um adulto!");
// }

// if (idade >= 60) {
//     alert("Você é um idoso!");
// }


if (idade < 14) {
    alert("Você é criança!");
} else if (idade < 18) {
    alert("Voce é adolescente!");
} else if (idade < 60) {
    alert("Você é adulto!");
} else {
    alert("Você é idoso!");
}




