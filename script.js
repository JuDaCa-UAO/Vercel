function compararNumeros(num1, num2) {
    if (num1 === num2) {
        console.log("Los números son iguales.");
    } else if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else {
        console.log(num1 + " es menor que " + num2);
    }
}

compararNumeros(5, 10);
compararNumeros(8, 3);
compararNumeros(7, 7);