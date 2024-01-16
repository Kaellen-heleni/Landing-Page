let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = "30%"
email.style.width="30%"
assunto.style.width="30%"

//o InnerHTML ele coloca algum texto ou uma tag html através do script

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
      txtNome.innerHTML = "Nome inválido"
      txtNome.style.color = "red"
    }else{
        txtNome.style.display = "none"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
      txtEmail.innerHTML = "Email inválido"
      txtEmail.style.color = "red"
    }else{
        txtEmail.style.display = "none"
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 10){
        txtAssunto.innerHTML = "Sua mensagem não pode ter mais de 100 caracteres."
        txtAssunto.style.color = "red"
        txtAssunto.style.display= "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk== true){
        alert("Mensagem enviada com sucesso!")
    }else{
        alert("Preencha todos os campos acima!")
    }
}