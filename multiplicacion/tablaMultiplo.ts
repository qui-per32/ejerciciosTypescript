    var numEnter: string = prompt("Introduce la tabla a multiplicar: ");
var num: number = parseInt(numEnter);

    for(var i=0; i<=10; i++)
    {
        document.write("<br>"+num+"*"+i+"="+(num*i));
    }