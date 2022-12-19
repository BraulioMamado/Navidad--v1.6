
let numero1 = prompt(`Introduzca el primer número de la operación`);

let operacion = prompt(`Introduzca =
1 Suma, 2 Resta, 3 Multiplicación, 4 División,
5 Raíz cuadrada, 6 Raíz Cubica, 7 Potenciación`);

let numero2

if (operacion == "1" || operacion == "2" || operacion == "3" || operacion == "4" || operacion == "7") {
     numero2 = prompt(`Introduzca el segundo número de la operación`);
}

let resultado

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

const hacerCuenta = (numero1,operacion,numero2) => {
    
    if (operacion === "1") {

        resultado =`<h1>${numero1} + ${numero2}</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 + numero2}</b><br>
                    <button onclick="location.href = location.href">Recargar Calculadora</button>
                    <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "2"){
        resultado =`<h1>${numero1} - ${numero2}</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 - numero2}</b><br>
                    <button onclick="location.href = location.href">Recargar Calculadora</button>
                    <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "3"){
        resultado =`<h1>${numero1} x ${numero2}</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 * numero2}</b><br>
                    <button onclick="location.href = location.href">Recargar Calculadora</button>
                    <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "4"){
        resultado =`<h1>${numero1} : ${numero2}</h1><br>
                   <b id="texto"> Resultado = <b id="resultado">${numero1 / numero2}</b><br>
                   <b id="resto"> Resto = <b id="resultado">${numero1 % numero2}</b><br>
                   <button onclick="location.href = location.href">Recargar Calculadora</button>
                   <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "5"){

        resultado =`<h1>√${numero1}</h1><br>
                   <b id="texto"> Resultado = <b id="resultado">${Math.sqrt(numero1)}</b><br>
                   <button onclick="location.href = location.href">Recargar Calculadora</button>
                   <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "6"){

        resultado =`<h1>∛${numero1}</h1><br>
                   <b id="texto"> Resultado = <b id="resultado">${Math.cbrt(numero1)}</b><br>
                   <button onclick="location.href = location.href">Recargar Calculadora</button>
                   <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else if (operacion === "7"){

        resultado =`<h1>${numero1} ∧ ${numero2}</h1><br>
                   <b id="texto"> Resultado = <b id="resultado">${Math.pow(numero1, numero2)}</b><br>
                   <button onclick="location.href = location.href">Recargar Calculadora</button>
                   <a id="botonVolverJE" href="../index.html" >Volver al Home</a>`
    }

    else {
        resultado =`<h2>Error</h2><br>
        <div>
        <button id="botonError" onclick="location.href = location.href">Recargar Calculadora</button>
        <a id="botonVolver" href="../index.html" >Volver al Home</a>
        </div>`
    }

    
}




hacerCuenta(numero1,operacion,numero2)




document.write(resultado)

