function Calcular() {
    var hora = parseFloat(document.getElementById('Hora').value);
    var quantidade = parseFloat(document.getElementById('Quantidade').value);
    console.log(quantidade);
    var bruto1 = parseFloat(hora * quantidade);
    document.getElementById('salarioBruto').value = 'R$' + bruto1
    let gratificacao = 0
    let quinzeporcento = parseFloat(0.15)
    let bruto2 = 0
    let liquido1 = 0
    let liquido2 = 0
    if (quantidade > 155 && quantidade < 165) {
        gratificacao = parseFloat(bruto1 * quinzeporcento)
        console.log('oioioioioi',gratificacao);
        document.getElementById('gratifi').value = 'R$' + gratificacao.toFixed(2)
        bruto2 = bruto1 + gratificacao  
        console.log("2: " +bruto1)
    } 
    if(bruto2 > 2000) {
        irrf = bruto2 * quinzeporcento
        document.getElementById('irrf').value = 'R$' + irrf.toFixed(2)
        liquido2 = bruto2 - irrf
        document.getElementById('salarioLiquido').value = 'R$' + liquido2.toFixed(2)
        console.log('oi',liquido2)
        console.log("4: " + bruto1)
    } else if (bruto2 <= 2000 && bruto2 !=0) {
        console.log('oi',bruto2)
        console.log("5: " + bruto1)
    } else if (bruto1 > 2000) {
        irrf = bruto1 * quinzeporcento
        document.getElementById('irrf').value = 'R$' + irrf.toFixed(2)
        liquido1 = bruto1 - irrf
        document.getElementById('salarioLiquido').value = 'R$' + liquido1.toFixed(2)
        console.log('oi',liquido1)
        console.log("6: " + bruto1)
    } else if(bruto1<=2000){
        console.log('oi',bruto1)
        console.log("7: " + bruto1)
    }
}
