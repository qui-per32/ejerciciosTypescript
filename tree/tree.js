var numEnter = prompt("Introduce un numero de líneas para dibujar un árbol: ");
var num = parseInt(numEnter);
var space = "&nbsp&nbsp";
if (num < 5) {
    alert('Debes introducir un numero mayor de 5');
}
else {
    var a = "<br>";
    var x = 1;
    for (var i = 0; i < num; i++, x = i + 1) {
        for (x; x < num; x++) {
            (a += space);
        }
        for (x = 0; x < 2 * i + 1; x++) {
            (a += "*");
        }
        a += "<br>";
    }
    document.write(a);
}
