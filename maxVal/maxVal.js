var num1 = parseInt(prompt("Introduce el primer número: "));
var num2 = parseInt(prompt("Introduce el segundo número: "));
if (num1 > num2) {
    alert("El " + num1 + " es mayor que " + num2);
}
if (num2 > num1) {
    alert("El " + num2 + " es mayor que " + num1);
}
if (num1 === num2) {
    alert("Son iguales");
}
