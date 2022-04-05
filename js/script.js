const quantidade = document.getElementById("quantidade")
const gerar = document.getElementById("gerar")
const limpar = document.getElementById("limpar")
const ul = document.getElementsByTagName("ul")
let saida = document.getElementById("saida")


function sorteio(q) {
  let s = []
  while (s.length < q) {
    let na = Math.floor(Math.random() * 60) + 1
    // sorteio.push(na)
    if (s.includes(na)) {
      na = Math.floor(Math.random() * 60) + 1
    } else {
      s.push(na)
    }
  }
  return s.sort(function (a, b) {return a - b})  
}


// gerar.addEventListener("click", sorteio(quantidade))
gerar.addEventListener("click", function(e) {
  e.preventDefault()
  console.log(sorteio(quantidade.value))
})
