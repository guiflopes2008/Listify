function MostrarMensagem(){

    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'

}





function Editar(){

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'block'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'


}
function deletar(){

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'block'
    document.getElementById('listar').style.display = 'none'

}function listar(){

document.getElementById('cadastro').style.display = 'none'
document.getElementById('editar').style.display = 'none'
document.getElementById('deletar').style.display = 'none'
document.getElementById('listar').style.display = 'block'
}
