export function soma(number1: number, number2: number) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return "Me envie números!";
    }

    return number1 + number2;
}



export function fibonacci (quantity: number) {
    if (quantity === 0){
        return[];
    }
    if (quantity === 1){
        return[1];
    }
    if (quantity < 0) {
        return "Mê dê um número positivo!"
    }
    if (quantity % 1) {

    }
    if (quantity > 50) {
        return "Me dê um número inteiro!"
    }



    const sequencia = [ 1, 1];
    for (let i = 2; i < quantity; i++) {
        sequencia.push(sequencia[i-1]! + sequencia[i-2]!);
    }
    return sequencia;
}

export function media(number1: number, number2: number) {
   return (number1 + number2) / 2;
}
export function ehPar(number: number) {
    return number % 2 === 0;
}
export function maior(number1: number, number2: number) {
    return number1 > number2 ? number1 : number2;
}
export function menor(number1: number, number2: number) {
    return number1 < number2 ? number1 : number2;
}
export function aprovado(nota: number) {
    return nota >= 70 ? "Aprovado" : "Reprovado";
}
export function categoriaIdade(idade: number) {
    if( idade < 12) return "Criança";
    if( idade > 18) return "Adolecente";
    return "Adulto";
}
export function contarCaracteres(texto: string, letra: string) { 
    return texto.split("").filter (char => char === letra).length;
}
export function inverter(texto: string) {
    return texto.split("").reverse().join;
}
export function contarVogais(texto: string) {
    return texto
    .toLowerCase()
    .split("")
    .filter(char => "aeiou".includes(char)).length;
}
export function somatorio(numeros: number[]) {
    return numeros.reduce((total, num ) => total + num, 0);
}
export function maiorDaLista(numeros: number[]) {
    return Math.max(...numeros);
}
export function mediaDaLista(numeros: number[]){
    return somatorio(numeros) / numeros.length;
}
export function contagemRegressiva(quantidade: number){
    const resultado : number [] = [];

    for (let i = quantidade; i >= 0; i--){
        resultado.push(i);
    }
    return resultado;
}  
export function fatorial(numero: number){
     let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
export function ehPalindromo(texto: string) {}

export function ehPrimo(numero: number){
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
export function removerDuplicados(texto: string){
    return [...new Set(texto.split("").join(""))];
}

export function ordemAlfabetica(texto: string) {
    return texto.split("").sort().join("");

}

export function contarPalavras(texto: string) {
    return texto.trim().split(/\s+/).length;
}

