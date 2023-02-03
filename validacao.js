function validacao() {
    var formulario = document.forms["formcadastro"]
    var nome = formulario.nome.value 
    var cpf = formulario.cpf.value
    var email = formulario.email.value
    var tMsg = formulario.tMsg.value
    var cel = formulario.cel.value
    var rua = formulario.rua.value
    var num = formulario.num.value
    var bairro = formulario.bairro.value
    var cidade = formulario.cidade.value

    var erro = false
    if (nome.indexOf(" ") == -1) {
        alert("Preencha o nome completo")
        erro = true 
    }
    if (cpf.length != 14) {
        alert("Preencha o CPF corretamente com pontuação")
        erro = true
    }
    if (cel.length < 13) {
        alert("Digite ddd + numero do celular")
        erro = true
    }
    if (email.indexOf("@") == -1) {
        alert("Preencha o email")
        erro = true
    }
    if (rua.indexOf(" ") == -1) {
        alert("Preencha o nome da rua")
        erro = true 
    }
    if (tMsg.length < 20) {
        alert("Digite a mensagem com pelomenos 20 caracteres")
        erro = true
    }
    if (erro) {
        return false
    } else {
        return true
    }
}
function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value)
    tot = qtd * 30;
    document.getElementById('cTot').value = tot;
}