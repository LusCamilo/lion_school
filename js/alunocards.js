'use strict'

import { getAlunosCurso } from "./api.js"



const createCard = (dados)=>{

    const a = document.createElement('a')
    a.classList.add('card-aluno')
    a.id = dados.numeroMatricula
    a.href = "../html/desempenho.html"
    
    const span = document.createElement('span')
    span.classList.add('span-nome')
    span.textContent = dados.nome
    
    const img = document.createElement('img')
    img.classList.add('img-aluno')
    img.src = dados.foto

    if(dados.statusAluno == 'Cursando'){
        a.classList.add('azul')
    }
    if(dados.statusAluno =='Finalizado'){
        a.classList.add('amarelo')
    }

    a.appendChild(img)
    a.appendChild(span)

    return a
}
const titulo = (dados) =>{

    const h2 = document.createElement('h2')
    let separador = dados.nomeCurso.split('Técnico em')
    h2.textContent = separador[1]

    return h2

}

const loadAlunos = async (siglaCurso)=>{

    const main = document.querySelector('main')
    const div = document.createElement('div')

    const dados = await getAlunosCurso(siglaCurso)
    div.classList.add('aluno')
    div.id = 'aluno'

    const createTitulo = titulo(dados[0])
    const creationCards = dados.map(createCard)
    div.replaceChildren(...creationCards)

    main.appendChild(createTitulo)
    main.appendChild(div)

}
loadAlunos(localStorage.getItem('curso'))


document.querySelector('main').addEventListener('click', (event)=>{

    if(event.target.classList.contains('card-aluno')){

        localStorage.setItem('matricula', event.target.id)

    }if(event.target.classList.contains('span-nome') || event.target.classList.contains('img-aluno')){

        localStorage.setItem('matricula', event.target.parentElement.id)

    }
    
})
