// aprendendo a usar o FOR
let n = 7

for (let i = 0; i <= 10; i++) {
    // console.log(`${i} X ${n} = ${i*n}`);
}

//aprendendo a usar o switch

// let cor = "azul"

//  

//Aprendendo mais sobre funções

window.addEventListener('focus', event => {
    //console.log('focus')
})

document.addEventListener('click', event => {
    //console.log('click')
})

// Data em milissegundos    (timeStump)
let agora = Date.now()
//console.log(agora)

//Data atual padrão do local 
//let hoje = new Date()
//console.log(hoje)

//Usando apenas umas parte da Data
let parte = new Date()
//console.log(parte.getDate())  //para o dia

//console.log(parte.getFullYear())  //para os quatro dígitos do ano

//console.log(parte.getMonth())  //para o array de mês

//Data atual de outra localização de outra pessoa
let pessoa = new Date()
//console.log(pessoa.toLocaleString("pt-BR")) // para date e horário
// console.log(pessoa.toLocaleDateString("pt-BR")) // apenas para data
// console.log(pessoa.toLocaleTimeString("pt-BR")) // apenas para horário

//Treinando ARRAY
let carros =  ["toro", "palio", "cross fox", "kwid", "marea", "logan", "F-150"]

// console.log(carros) //para ver todos os itens do array
// console.log(carros.length) //para ver o tamanho
// console.log(carros[6]) // para pegar o objeto específico

//forEach para percorrer
carros.forEach(function(value, index){  
    // console.log(value, index)
})
 

//Orientação a objeto
let celular = function(){          //Usar o this para transformar uma variável em um atributo, e uma função, um método ( que possui ())
    this.cor = "prata"

    this.ligar = function(){
    console.log("Uma ligação")
    return "ligando"
    } 
}

let objeto = new celular()

console.log(objeto.ligar())