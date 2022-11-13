'use strict'

document.getElementById('sair').addEventListener('click', () => {

    if (confirm('você quer realmente fechar essa página?')) {
        window.close()
    }

})