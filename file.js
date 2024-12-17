let bancodeDados = [];
let  nomeDel
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

                        let user = document.getElementById('cadUsername').value; 
                        let novouser = document.getElementById('novo').value;  
                        
                        
                        let posVetor = -1;
                        
                      
                        for (let i = 0; i < bancodeDados.length; i++) {
                            if (bancodeDados[i].cadUser == user) {
                                posVetor = i;  
                            }
                        }
                        
                        if (posVetor !== -1) {
                           
                            bancodeDados[posVetor].cadUser = novouser;
                            alert('Conta editada com sucesso');
                        } else {
                            alert('Usuário não encontrado');
                        }
                    }

                      
                       
                    function deletar(){
                       
                        document.getElementById('cadastro').style.display = 'none'
                        document.getElementById('editar').style.display = 'none'
                        document.getElementById('deletar').style.display = 'block'
                        document.getElementById('listar').style.display = 'none'

                    }

    function delet(){

        let deletEmail = document.getElementById('deletEmail').value;
        posVetor = bancodeDados.indexOf(deletEmail).value;
        bancodeDados.splice(posVetor,1)
        alert("usuario excluido com sucesso")
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
 
