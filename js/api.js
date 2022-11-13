'use strict'

const getCursos = async () => {

    const url = 'https://projeto-lion-school.netlify.app/.netlify/functions/api/cursos'
    const response = await fetch(url)
    const listaCursos = await response.json()
    return listaCursos.cursos

}
const getAlunosCurso = async (curso) => {


    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/alunos/${curso}`
    const response = await fetch(url)
    const listaAlunos = await response.json()
    return listaAlunos.alunosCadastrados


}
const getAlunoMatricula = async (matricula, curso) => {

    const url = `https://projeto-lion-school.netlify.app/.netlify/functions/api/discente/${matricula}/${curso}`
    const response = await fetch(url)
    const aluno = await response.json()
    return aluno.alunoMatricula

}


export {

    getAlunosCurso,
    getCursos,
    getAlunoMatricula

}