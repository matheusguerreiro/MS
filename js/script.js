const quantidade = document.getElementById("quantidade")
const gerar = document.getElementById("gerar")
const limpar = document.getElementById("limpar")
const ul = document.querySelector(".lista-numeros")
let saida = document.getElementById("saida")


function sorteio(q) {
  let s = []
  while (s.length < q) {
    let na = Math.floor(Math.random() * 60) + 1
    if (s.includes(na)) {
      na = Math.floor(Math.random() * 60) + 1
    } else {
      s.push(na)
    }
  }
  return s.sort(function (a, b) {return a - b})  
}

function addLi() {
  q = quantidade.value
  a = sorteio(q)
  for(let i = 0; i < q; i++) {
    const li = document.createElement('li')
    li.classList.add('lista-item')
    if(a[i] < 10) {
      li.textContent = `0${a[i]}`
    } else {
      li.textContent = `${a[i]}`
    }
    ul.appendChild(li)
  }
}

gerar.addEventListener("click", function(e) {
  e.preventDefault()
  ul.innerHTML = ""
  addLi()
})
