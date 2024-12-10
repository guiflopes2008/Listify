// function equipe(){
    
    
//     document.getElementById('equipe').style.display = 'block'
//     document.getElementById('cadastro').style.display = 'none'
//     document.getElementById('editar').style.display = 'none'
//     document.getElementById('deletar').style.display = 'none'
//     document.getElementById('listar').style.display = 'none'
// }

function cadastro(){
    
    // document.getElementById('equipe').style.display = 'none'
    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
    
}
function cadastrar(){
    let bancodeDados = [];
    let cadEmail = document.getElementById('cadEmail').value;
    let cadUser = document.getElementById('cadUsername').value;
    let cadSenha = document.getElementById('cadPassword').value;
    let cadUsuario = { cadEmail, cadUser, cadSenha } 
    bancodeDados.push(cadUsuario)
    alert("Usuário cadastrado com sucesso! Seja bem vindo "+cadUser+"!")
    
}




function editar(){
    
    // document.getElementById('equipe').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'block'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
    
    
}
function confirmar(){
    let editDados = [];
    let editEmail = document.getElementById('editEmail').value;
    let senhaAtual = document.getElementById('editsenhaAtual').value;
    let editSenha = document.getElementById('editSenha').value;
    let confSenha = document.getElementById('editconfSenha').value;
    let editUsuario = { editEmail, senhaAtual, editSenha, confSenha} 
    editDados.push(editUsuario)

    

    alert("Senha atualizada com sucesso! Seja bem vindo !")
    
}
function deletar(){
    
    // document.getElementById('equipe').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'block'
    document.getElementById('listar').style.display = 'none'

}function listar(){

// document.getElementById('equipe').style.display = 'none'
document.getElementById('cadastro').style.display = 'none'
document.getElementById('editar').style.display = 'none'
document.getElementById('deletar').style.display = 'none'
document.getElementById('listar').style.display = 'block'
}
