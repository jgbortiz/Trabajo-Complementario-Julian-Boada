alert ("VAMOS A CHEQUEAR SI APROBASTE")

let materia= prompt("Ingresa la Materia a Verificar")

while (materia !=""){
    let nota = parseFloat(prompt("Ingresa tu Nota"));
    if (nota >=6){
        alert ("APROBASTE");
    }else {
        alert ("DESAPROBASTE");
        break
    }
    let materia= prompt("Ingresa la Materia a Verificar")
}

