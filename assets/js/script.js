/*
Case Sensetive = A linguagem Reconheçe Letras Maisculas e Minusculas

por Tag: getElementByTagName()       FORMAS DE ACESSAR O DOM :
por Id;  getElementById()            FORMAS DE ACESSAR O DOM :
por Nome;  getElementsByNome()       FORMAS DE ACESSAR O DOM :
por Classe;  getElementsByClasse()   FORMAS DE ACESSAR O DOM :
por Seletor: querySelector()         Q + USAREMOS FORMAS DE ACESSAR O DOM :
*/

/*------------------------------------------------ */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')        /*DECLARANDO AS VARIAVES*/
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa= document.querySelector('#mapa')

/*------------------------------------------------ */

nome.style.width= '97%'
email.style.width= '97%'


function validaNome()
{
    let txtNome = document.querySelector('txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style  = 'red' 
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style = 'green'
        nomeOK=true
    }
}

function validaEmail()
{
        txtEmail = document.querySelector( 'txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color  ='red'
} 
    else{
        txtEmail.innerHTML = ' Email Válido'
        txtEmail.style.color  ='green'
        emailOK=true
    }
 

}

function validaAssunto()
 {
     let txtAssunto = document.querySelector("#txtassunto")
     if(assunto.value.length >=100)
     {
         txtAssunto.innerHTML="Texto muito grande, digite no maximo 100 caracteres"
         txtAssunto.style.color = "red"
     }
     else{
         txtAssunto.innerHTML="Texto valido"
         txtAssunto.style.display = "none"
         assuntoOK=true
     }
 }

 function enviar () {
     if (nomeOK == true && emailOK == true && assuntoOK == true) {
         alert('Formulario enviado com Sucesso ')
     }
     else {
         alert( 'Preencha o Formulario Corretamento')
     }

 }
 function mapazoom() {
     mapa.style.width= '800px'
     mapa.style.height= '600px'

 }

 function mapanormal() {
     mapa.style.width="350" 
     mapa.style.height="250" 
}