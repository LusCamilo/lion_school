'use strict'

import  { getCursos } from "./api.js"



const createCard = (dados) =>{

    const div = document.createElement('div')
    div.classList.add('cards')
    div.id = dados.sigla

    const img = document.createElement('img')
    img.src = dados.icone
    img.classList.add('icone')

    const a = document.createElement('a')
    a.id = (dados.sigla)
    a.classList.add('link')
    a.href = './html/cards.html'
    

    const p = document.createElement('p')
    p.textContent = dados.sigla

    a.appendChild(p)
    a.appendChild(img)
    div.appendChild(a)

    return div
}

const loadCard = async () =>{

    const dados = await getCursos()
    const constainer = document.getElementById('all-button')
    const card = dados.map(createCard)
    constainer.replaceChildren(...card)

}
loadCard()

document.getElementById('all-button').addEventListener('click', (event) =>{

    localStorage.setItem('curso', event.target.parentElement.id)

})

