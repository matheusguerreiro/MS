const quantidade = document.getElementById("quantidade")
const gerar = document.getElementById("gerar")
const limpar = document.getElementById("limpar")
const ul = document.getElementById('lista-numeros')


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
  let q = quantidade.value
  if (q < 6 || q > 15) {
    alert('Quantidade Inválida de Números!')
    return
  }
  let s = sorteio(q)
  for(let i = 0; i < q; i++) {
    const li = document.createElement('li')
    li.classList.add('lista-item')
    if(s[i] < 10) {
      li.textContent = `0${s[i]}`
    } else {
      li.textContent = `${s[i]}`
    }
    ul.appendChild(li)
  }
}

gerar.addEventListener("click", function(e) {
  e.preventDefault()
  ul.innerHTML = ""
  addLi()
})
