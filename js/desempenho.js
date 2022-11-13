

'use strict'



import { getAlunoMatricula } from "./api.js";


const criarInfoAluno = (dados)=>{

    const div = document.createElement('div')

    div.classList.add('aluno')

    const img = document.createElement('img')
    img.src = dados.foto


    const p = document.createElement('p')
    p.textContent = dados.nome


    div.appendChild(img)
    div.appendChild(p)

    return div
}

const createDesempenho = (dados)=>{
    
    const div = document.createElement('div')
    div.classList.add('container')
    
    const barra = document.createElement('div')
    barra.classList.add('desempenho')
    
    const barraDesempenho = document.createElement('div')
    barraDesempenho.classList.add('desempenho-barra')
    barraDesempenho.style.height = `${dados.media}%`

    const nota = document.createElement('p')
    nota.classList.add('nota')
    nota.textContent = dados.media
    
    const disciplina = document.createElement('p')
    disciplina.classList.add('disciplina')
    disciplina.textContent = dados.sigla


    if (dados.media > 60) {

        barraDesempenho.classList.add('azul')
        nota.classList.add('text-azul')

    } else if(dados.media < 50){

        barraDesempenho.classList.add('vermelho')
        nota.classList.add('text-vermelho')

    } else{

        barraDesempenho.classList.add('amarelo')
        nota.classList.add('text-amarelo')
    
    }


    barra.appendChild(barraDesempenho)
    
    div.appendChild(nota)
    div.appendChild(barra)
    div.appendChild(disciplina)

    return div
}

const carregarInfo = async (matricula, curso)=>{

    const main = document.querySelector('main')
    
    const cardDesempenho = document.createElement('div')
    cardDesempenho.classList.add('caixa-desempenho')

    const dados = await getAlunoMatricula(matricula, curso)
    const infoAluno = criarInfoAluno(dados)
    const desempenhoCria = dados.desempenho.map(createDesempenho)
    cardDesempenho.replaceChildren(...desempenhoCria)

    main.appendChild(infoAluno)
    main.appendChild(cardDesempenho)
}

carregarInfo(localStorage.getItem('matricula'), localStorage.getItem('curso'))