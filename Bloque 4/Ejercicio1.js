/*
6. Invertir varios números
Entrada:
numeros = [123, 456, 780]
Proceso:
• Extraer los dígitos en orden inverso usando ciclos.
Salida:
123 → 321
456 → 654
780 → 87
*/
function invertirNumeros () {
    let numeros = [];
    let n = parseInt (prompt ("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        numeros [i] = parseInt (prompt (`Ingrese número ${i+1}`));
        let numeroInvertido= 0;
        while (numeros[i] > 0) {
        let digito = numeros[i] % 10;
        numeroInvertido = numeroInvertido * 10 + digito;
        numeros[i] = Math.floor(numeros[i] /10);
    }
    alert(`Número invertido: ${numeroInvertido}`);
    }

}
invertirNumeros ();