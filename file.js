let bancodeDados = [];
let nomeEdit, novoNome,novouser,confuser, novaSenha,confSenha, nomeDel
let posVetor
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

                    nomeEdit = document.getElementById('editEmail').value
                    novoNome = document.getElementById('EditEmail').value

                    novouser = document.getElementById('editUser').value
                    confuser = document.getElementById('EditUser').value

                    novaSenha =document.getElementById('editconfSenha').value
                    confSenha = document.getElementById('EditconfSenha').value
                    
                    let posVetor = bancodeDados.indexOf(user => user.email === nomeEdit); 


                    if (posVetor !== -1) {


                        bancodeDados[posVetor].email = novoNome;
                        bancodeDados[posVetor].usuario = confuser;
                        bancodeDados[posVetor].senha = confSenha;
                        
                        alert("Dados atualizados com sucesso!"); } 

                    else { alert("Email não encontrado.")
                    } 


                    // posVetor = bancodeDados.indexOf(nomeEdit,novouser,novaSenha)
                    // bancodeDados[posVetor] = novoNome,confuser,confSenha

                    //     alert(bancodeDados)
                        }
        

                    function deletar(){
                       
                        document.getElementById('cadastro').style.display = 'none'
                        document.getElementById('editar').style.display = 'none'
                        document.getElementById('deletar').style.display = 'block'
                        document.getElementById('listar').style.display = 'none'

                    }

    function delet(){

        nomeDel = prompt('qual nome del')
        posVetor = bancodeDados.indexOf(nomeDel)
        bancodeDados.splice(posVetor,1)
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
 
