let bancodeDados = [];
let posVetor
let procurar
function cadastro() {

    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'

}
function cadastrar() {
    let cadEmail = document.getElementById('cadEmail').value;
    let cadUser = document.getElementById('cadUsername').value;
    let cadSenha = document.getElementById('cadPassword').value;
    let cadUsuario = { cadEmail, cadUser, cadSenha }


    if (existe(cadEmail)) {
        alert("Conta já existente");
    } else {
        bancodeDados.push(cadUsuario)
        alert("Usuário cadastrado com sucesso! Seja bem vindo " + cadUser + "!")
    }

}
function existe(email) {
    for (let usuario of bancodeDados) {
        if (email == usuario.cadEmail) {
            return true;
        }
    }
    return false;

}

function editar() {

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'block'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'


}

function buscar() {
    procurar = null;
    let gmail = document.getElementById("busca").value;
    for (let i = 0; i < bancodeDados.length; i++) {
        if (bancodeDados[i].cadEmail == gmail) {
            procurar = bancodeDados[i];
            break;
        }
    }
    if (procurar != null) {
        document.getElementById("edituser").value = procurar.cadUser;
        document.getElementById("editemail").value = procurar.cadEmail;
    }
    else {
        alert("Conta não encontrada!");
    }
}

function confirmar() {
    if (procurar != null) {
        procurar.cadUser = document.getElementById("edituser").value;
        procurar.cadEmail = document.getElementById("editemail").value;
    }
    else {
        alert("Conta não encontrada!");
    }
    listar();
}




function deletar() {

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'block'
    document.getElementById('listar').style.display = 'none'

}

function delet() {
    let deletEmail = document.getElementById('deletEmail').value;

    let posVetor = -1;
    for (let i = 0; i < bancodeDados.length; i++) {
        if (bancodeDados[i].cadEmail === deletEmail) {
            posVetor = i;
            break;
        }
    }

    if (posVetor !== -1) {
        bancodeDados.splice(posVetor, 1);
        alert("Usuário excluído com sucesso!");
    } else {
        alert("Usuário não encontrado.");
    }
}

function listar() {

    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'block'

    exibir()
}



function exibir() {
    let tabelinha = "";
    for (let usuario of bancodeDados) {
        tabelinha += "<br>Nome: " + usuario.cadUser+"<br>Email: "+usuario.cadEmail
    }
    document.getElementById('dados').innerHTML = tabelinha
}

