
//Exercício 1
const a = 5;
const b = 2;
//Adição
console.log(a + b);

//Subtração
console.log(a - b);

//Multiplicação
console.log(a * b);

//Divisão
console.log(a / b);

//Módulo
console.log(a % b);

//Exercício 2
const num1 = 2
const num2 = 3

if (num1 > num2) {
    console.log (num1)
}
else {
    console.log (num2)
}

//Exercício 3
const num1 = 4
const num2 = 3
const num3 = 2

if (num1 > num2 && num1 > num3) {
console.log(num1);
}
else if (num2 > num1 && num2 > num3){
console.log(num2);
}
else {
console.log(num3);
}

//Exercício 4
const a = 5

if  (a > 0){
    console.log("Positivo");
}
else if (a < 0){
    console.log("Negativo");
}
else {
    console.log("zero");
}

//Exercício 5
const a = 60
const b = 60
const c = 60

if  (a+b+c == 180){
    console.log("true");
}
else if (a || b || c < 0){
    console.log("erro");
}
else {
    console.log("false");
}

//Exercício 6
const pecaDeXadrez = "RAINha";

switch (pecaDeXadrez.toLowerCase ()) {
    case "rei":
        console.log("Rei -> Uma casa apenas para qualquer direção");
        break;
    case "bispo":
        console.log("Bispo -> Diagonal");
        break;
    case "rainha":
        console.log("Rainha -> Diagonal, horizontal e vertical");
        break;
    case "cavalo":
        console.log("Cavalo -> Movimento em L, pula sobre as peças");
        break;
    case "torre":
        console.log("Torre -> Linha Reta, horizontal e vertical");
        break;
    case "peão":
        console.log("Peão -> Apenas uma casa para frente");
        break;
    default:
        console.log("Ërro, peça inválida!");
        break;
};
