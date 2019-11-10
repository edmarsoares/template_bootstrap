function isCpfValido(cpf) {

    if (!cpf) {
        return false;
    }

    var cpfApenasNumeros = cpf.replace(/\D/g, '');

    if (cpfApenasNumeros === "00000000000"
        || cpfApenasNumeros === "11111111111"
        || cpfApenasNumeros === "22222222222"
        || cpfApenasNumeros === "33333333333"
        || cpfApenasNumeros === "44444444444"
        || cpfApenasNumeros === "55555555555"
        || cpfApenasNumeros === "66666666666"
        || cpfApenasNumeros === "77777777777"
        || cpfApenasNumeros === "88888888888"
        || cpfApenasNumeros === "99999999999") {
        return false;
    }
    //Calculo primeiro digito
    var soma = 0;
    var resto;

    soma = somaItensArray(11, 9, cpfApenasNumeros);

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpfApenasNumeros.substring(9, 10))) {
        console.log("Este cpf não é válido : ", cpfApenasNumeros)
        return false;
    }

    soma = 0;

    soma = somaItensArray(12, 10, cpfApenasNumeros);

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpfApenasNumeros.substring(10, 11))) {
        console.log("Este cpf não  é válido : ", cpfApenasNumeros)
        return false;
    }

    console.log("Este cpf é válido : ", cpfApenasNumeros)
    return true;

}

// funcao responsável pela soma dos digitos de um cpf
function somaItensArray(multiplicador, tamanho, cpf) {
    soma = 0
    for (var i = 1; i <= tamanho; i++) {
        //pegando  cada numero individual do cpf
        substringNumeroCpf = cpf.charAt(i - 1);
        // substringNumeroCpf = cpf.substring(i - 1 , i);
        soma = soma + parseInt(substringNumeroCpf) * (multiplicador - i);
    }
    return soma;
}

function validarCpf() {
    let cpf = document.getElementById("cpf").value;

    let cpfValido = isCpfValido(cpf);

    if(!cpfValido){
        document.getElementById("mensagemCpf").innerHTML = "Este cpf não é válido";
        inserirClass("alert alert-danger", "mensagemCpf");

    }else {
        document.getElementById("mensagemCpf").innerHTML = ""
        document.getElementById("mensagemCpf").className = "";

    }

}

function inserirClass(clazz, id){
     document.getElementById(id).className = clazz;
}
