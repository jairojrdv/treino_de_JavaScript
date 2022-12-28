//variaveis
var nome = "jairo"
let idade = 23
const cidade = "Imperatriz"

//console.log(nome, idade, cidade) 

nome = "Julio"
idade = 21
numero = "4"

//console.log(numero)
var numero
let lista = []
let objeto = {

}
let funcao = function () {
    const meunome = "Junior"
}
//console.log(lista, objeto, funcao)
//console.log(typeof funcao)

// funções

function printf(entrada) {
    console.log(entrada)
}
//printf(nome)

function soma(num1, num2) {
    const resultado = num1 + num2
    console.log(resultado)
}
//soma(2, 3)

function juntarnome(nome, sobrenome) {
    return nome + " " + sobrenome
}
const meunomecompleto = juntarnome("jairo", "junior")

//console.log(meunomecompleto)


//objeto

let pessoa = {
    nome: "jairo", idade: 23, cidade: "Imperatriz", defeitos: ["pobre", "feio", "vascaino"]
}
pessoa.cidade = "Curitiba"
//console.log("O " + pessoa.nome + " é " + pessoa.defeitos[1] + " e " + pessoa.defeitos[2])

let pessoa2 = {
    nome: "Julio", idade: 21, cidade: "Sul", defeitos: ["São Paulino", "De vila nova", "Nasceu"]
}
//console.log("O " + pessoa2.nome + " é " + pessoa2.defeitos[1] + " e " + pessoa2.defeitos[2])

function nomedefeito(nome, defeitos){
    return nome +" "+ defeitos[1]+" e "+defeitos[2]
}
//pra rodar uma função é preciso ter parenteses
//console.log(nomedefeito(pessoa.nome, pessoa2.defeitos))

function copy(){
    let cpfcnpj = document.getElementById('copy').value
    cpfcnpj = cpfcnpj.replaceAll('.','').replaceAll('-','').replaceAll('/','')
    console.log(cpfcnpj)  
    alert('Numero copiado') 
    navigator.clipboard.writeText(cpfcnpj)
}

//treinando for 

