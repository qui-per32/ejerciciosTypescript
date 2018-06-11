var arrayNumbers: number[] = [];

for (var i = 0; i <= 3; i++) {
    var numEnter: string = prompt("Introduce 4 números: ");
    var num = parseInt(numEnter);
    var newArray = arrayNumbers.push(num);   
}

var sumaAll:number=0;
for (var i = 0; i < arrayNumbers.length; i++) {
    sumaAll+=arrayNumbers[i];
}

arrayNumbers.sort();
document.write("El numero más pequeño introducido es: " + arrayNumbers[0] + "<br>");
document.write("El numero más grande introducido es: " + arrayNumbers[arrayNumbers.length-1] + "<br>");
document.write("La suma de todos los elementos del array es: "+ sumaAll);