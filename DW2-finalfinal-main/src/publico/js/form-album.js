/**
 * Colocando máscara nos campos CPF e telefone com JQuery
 */
$(function() {
    $("#telWhats").mask('(00) 00000-0000');
    $("#cpf").mask('000.000.000-00');
});

/**
 * Validações no formulário HTML para garantir integridade antes da submissão do formulario
 */
function validarFormulario(){
    let ret = true;
    let msgToast = document.getElementById('msgToast')
    msgToast.innerHTML = "";

    let form = document.forms["dataForm"];

    if (form.nome.value.trim() == "") {
        msgToast.innerHTML = "Informar o nome <br>";
        form.nome.focus();
        ret = false;
    }

    if (form.cpf.value.trim() == "") {
        msgToast.innerHTML = msgToast.innerHTML +  "Informar o CPF <br>";
        form.cpf.focus();
        ret = false;
    }

     if (form.telWhats.value.trim() == ""){
        msgToast.innerHTML = msgToast.innerHTML + "Informar o telefone <br>";
        form.telWhats.focus();
        ret = false;
    }

    if ((form.email.value.indexOf(".") == -1) ||
        (form.email.value.indexOf("@") == -1) ||
        (form.email.value.indexOf(".") - form.email.value.indexOf("@") == 1)) {
            msgToast.innerHTML = msgToast.innerHTML + "Informar um e-mail válido <br>";
        form.email.focus();
        ret = false;
    }

    if (form.estCivil.selectedIndex < 1){
        msgToast.innerHTML = msgToast.innerHTML + "Informar o Estado Civil <br>";
        form.estCivil.focus();
        ret = false;
    } 

    if (form.curso.selectedIndex < 1){
        msgToast.innerHTML = msgToast.innerHTML + "Informar o Curso";
        form.curso.focus();
        ret = false;
    } 

    if (!ret){
        let toastLive = document.getElementById('liveToast')
        let toast = new bootstrap.Toast(toastLive)
        toast.show()
    }

    return ret;
}