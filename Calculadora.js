 const Calcular = function() {
    var hora = parseInt(document.getElementById('Hora').value);
    var quantidade = parseInt(document.getElementById('Quantidade').value);
    var bruto1 = (hora * quantidade);
    let gratificação = 0
    let quinzeporcento = 0.15
    let bruto2 = 0
    let liquido1 = 0
    let liquido2 = 0
        console.log("1: " + bruto1)
    if (quantidade >= 155 && quantidade <= 165) {
        gratificação = bruto1 * quinzeporcento
        bruto2 = bruto1 + gratificação
        console.log("2: " +bruto1)
    } 
    
    console.log("3: " + bruto1)
    if (bruto2 > 2000) {
        irrf = bruto2 * quinzeporcento
        liquido2 = bruto2 - irrf
        console.log(liquido2)
        console.log("4: " + bruto1)
    } else if (bruto2 <= 2000 && bruto2 !=0) {
        console.log(bruto2)
        console.log("5: " + bruto1)
    } else if (bruto1 > 2000) {
        irrf = bruto1 * quinzeporcento
        liquido1 = bruto1 - irrf
        console.log(liquido1)
        console.log("6: " + bruto1)
    } else if(bruto1<=2000){
        console.log(bruto1)
        console.log("7: " + bruto1)
    }
    
    
     

    

   

}
