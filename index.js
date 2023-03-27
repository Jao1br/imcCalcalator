function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(altura, peso) {

    return  peso / (altura * altura);
 
}



var alturaInformada = prompt("Informe sua altura");
var pesoInformado = prompt("Informe seu peso");

var imc = calculaImc(alturaInformada, pesoInformado);
mostra("O IMC calculado é : " + imc);

