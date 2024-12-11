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
    let editUsuario = { editEmail,editSenha,senhaAtual, confSenha} 
    editDados.push(editUsuario)
    if(editSenha==confSenha){
    alert('Senha atualizada com sucesso')
    }else{alert("A senha está incorreta. Tente novamente.")}
    
   
}


                    function deletar(){
                        
                        // document.getElementById('equipe').style.display = 'none'
                        document.getElementById('cadastro').style.display = 'none'
                        document.getElementById('editar').style.display = 'none'
                        document.getElementById('deletar').style.display = 'block'
                        document.getElementById('listar').style.display = 'none'

                    }

     function delet(){

        let deletDados = [];
        let deletEmail = document.getElementById('deletEmail').value;
        let deletSenha = document.getElementById('DeletSenha').value;
        let confSenha = document.getElementById('DeletConfSenha').value;

        let deletUsuario = {deletEmail,deletSenha,confSenha} 

        if(deletUsuario==cadastrar){
        deletDados.splice(deletUsuario ,1)
        alert('conta excluida')
    }else{alert('conta nao encontrada')}

        // if(editSenha==confSenha){
        // alert('Senha atualizada com sucesso')
        // }else{alert("Senha incorreta !")}


     }       

function listar(){

// document.getElementById('equipe').style.display = 'none'
document.getElementById('cadastro').style.display = 'none'
document.getElementById('editar').style.display = 'none'
document.getElementById('deletar').style.display = 'none'
document.getElementById('listar').style.display = 'block'
}
