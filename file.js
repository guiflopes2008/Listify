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
    // let bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
    // bancodeDados.push(cadUsuario)
    // localStorage.setItem("bancodeDados", JSON.stringify)

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


                        let user = document.getElementById('cadUsername').value;  // Nome de usuário atual
                        let novouser = document.getElementById('novo').value;  // Novo nome de usuário
                    
                        // Procurando o índice do usuário pelo nome de usuário atual
                        let posVetor = bancodeDados.findIndex(usuario => usuario.cadUser === user);
                    
                        if (posVetor !== -1) {
                            // Se o usuário for encontrado, alteramos o nome de usuário
                            bancodeDados[posVetor].cadUser = novouser;
                            alert('Conta editada com sucesso');
                        } else {
                            alert('Usuário não encontrado');
                        }
















                        // let user = document.getElementById('cadUsername').value 
                        // let novouser=document.getElementById('novo').value

                        //     let cof={user, novouser}
                        //     posVetor=bancodeDados.indexOf(cof)

                        //     // bancodeDados.push(cof)

                        //      bancodeDados[posVetor] = novouser
                        // alert('conta editada')
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
 
