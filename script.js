let avo = document.querySelector(".fundo-azul");
let pai = document.querySelector(".fundo-verde");
let filho = document.querySelector(".fundo-vermelho");

// PRIMEIRO: UMA DAS PRINCIPAIS VANTAGENS DO EVENT LISTENER É QUE, COM ELE, É POSSIVEL ADICIONAR ADICIONAR MAIS DE UM EVENTO A UM ELEMENTO
// avo.addEventListener("click", e =>{
//   console.log("Primeiro evento de clique");
// })
// avo.addEventListener("click", e =>{
//   console.log("Segundo evento de clique");
// })
// avo.addEventListener("click", e =>{
//   console.log("Terceiro evento de clique");
// })

// EXPLICANDO O BUBBLE: ACONTECE QUANDO FILHOS
avo.addEventListener("click", e => {
  console.log(e);
  console.log("cliquei no avo (azul)");
})

pai.addEventListener("click", e => {
  console.log("cliquei no pai (verde)")
})

filho.addEventListener("click", e => {
  console.log("cliquei no filho (vermelho)")
  //e.stopPropagation()

})

//É POSSÍVEL USAR O REMOVEEVENTLISTENER TAMBÉM, MAS TEM QUE TER CUIDADO QUANDO SE USA ARROWFUNCTIONS PORQUE 
// ELE ENTENDE COMO SE ESTIVESSEMOS CRIANDO OUTRA ARROW. Esse exemplo não deve funcionar propositalmente...
// let botaoRemover = document.querySelector(".bubble button")
// botaoRemover.addEventListener("click", removerEventos)

// function removerEventos(){
//   console.log("remover eventos")
//   avo.removeEventListener("click",  e =>{})
//   pai.removeEventListener("click", e =>{})
//   filho.removeEventListener("click", e =>{})
// }


//NÃO ACONTECE QUANDO NÃO SÃO FILHOS UM DO OUTRO, MESMO QUE ELES ESTEJAM 'UM POR CIMA DO OUTRO' NO LAYOUT
// let paiRoxo = document.querySelector(".fundo-roxo");
// let filhoAmarelo = document.querySelector(".fundo-amarelo");

// paiRoxo.addEventListener("click", e =>{
//   console.log("cliquei no pai roxo")
// })

// filhoAmarelo.addEventListener("click", e =>{
//   console.log("cliquei no filho amarelo")
// })

let lugarInput = document.querySelector(".lugar-para-colocar-input");

lugarInput.addEventListener("click", e => {
  let input = lugarInput.querySelector("div");

  input.innerHTML += `
  <input type="text" placeholder="colque um texto aqui">
  `
  e.stopPropagation()
})


let galeriaGatinhos = document.querySelector(".galeria-de-fotos")
galeriaGatinhos.addEventListener("click", e => {
  console.log(e.target)
})
