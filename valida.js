const usuarios = [
    {
        login: 'admin',
        pass: 'admin'

    },
    {
        login: 'junio',
        pass: 'junio'
    }

]
let botao = document.getElementById('btnlogar')
botao.addEventListener('click', function logar() {
    let pegausuario = document.getElementById('usuario').value
    let pegasenha = document.getElementById('senha')
    for (let i in ussuarios) {
        if (pegausuario == usuarios[i].login) {
            alert('ok')
        } else {
            alert('erro')
        }
    }
}
)
