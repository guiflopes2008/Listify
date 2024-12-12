let bancodeDados = [];

function cadastro(){

    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
    
}
function cadastrar(){
    let cadEmail = document.getElementById('cadEmail').value;
    let cadUser = document.getElementById('cadUsername').value;
    let cadSenha = document.getElementById('cadPassword').value;
    let cadUsuario = { cadEmail, cadUser, cadSenha }

    if(existe(cadEmail)){
        alert("Conta já existente");        
    }else{
            bancodeDados.push(cadUsuario)
            alert("Usuário cadastrado com sucesso! Seja bem vindo "+cadUser+"!")
        }

}
function existe(email){
    for(let usuario of bancodeDados){
        if(email==usuario.cadEmail){
            return true;
        }
    }
return false;
    
}

function editar(){

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'block'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
    
    
}

function confirmar(){

    let editEmail = document.getElementById('editEmail').value;
     let senhaAtual = document.getElementById('editsenhaAtual').value;
    let editSenha = document.getElementById('editSenha').value;
    let confSenha = document.getElementById('editconfSenha').value;
    let editUsuario = { editEmail,editSenha,senhaAtual, confSenha} 

editUsuario
        if(existesenha(Senha)){
            bancodeDados.splice(senhaAtual)
                
    }else{
            bancodeDados.push(confSenha)
            alert("senha trocada")
        }

}
function existesenha(Senha){
    for(let usuario of bancodeDados){
        if(Senha==senha.cadEmail){
            return true;
        }
    }
return false;

   
   
}


                    function deletar(){
                       
                        document.getElementById('cadastro').style.display = 'none'
                        document.getElementById('editar').style.display = 'none'
                        document.getElementById('deletar').style.display = 'block'
                        document.getElementById('listar').style.display = 'none'

                    }

    function delet(){

        let deletEmail = document.getElementById('deletEmail').value;
        let deletSenha = document.getElementById('DeletSenha').value;
        let confSenha = document.getElementById('DeletConfSenha').value;

            let deletUsuario = {deletEmail,deletSenha,confSenha} 

            if(deletUsuario==cadastrar){
            deletDados.splice(deletUsuario ,1)
             alert('conta excluida')
         }else{alert('conta nao encontrada')}


     }       

                function listar(){

                document.getElementById('cadastro').style.display = 'none'
                document.getElementById('editar').style.display = 'none'
                document.getElementById('deletar').style.display = 'none'
                document.getElementById('listar').style.display = 'block'
                }
                function exibir(){
                        let tabelinha = "Usuários cadastrados";
                        for(let usuario of bancodeDados){
                        tabelinha += "\n"+usuario.cadUser
                        }
                        alert(tabelinha);
                    }
 
