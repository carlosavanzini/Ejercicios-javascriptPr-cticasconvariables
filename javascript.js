/*
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/ 
    // alert('Hola a todos los Rollings')

/*
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

*/
    // document.write('Hola a todos desde html')

/*
3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

*/ 
    // alert(3+5);

/*
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

*/
    // let nombre= prompt('Como se llama?')
    // alert(`Hola ${nombre}`);

/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

*/
    // let numero1=parseInt(prompt('Ingresa el primer numero'));
    // let numero2=parseInt(prompt('Ingresa el segundo numero'))
    // alert(`La suma de ${numero1} + ${numero2} es igual a ${numero1 + numero2}`);

/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/ 
    // let numero1=parseInt(prompt('Ingresa el primer numero para valida'));
    // let numero2=parseInt(prompt('Ingresa el segundo para validar'))

    // if(numero1===numero2){
    //     alert(`Los numeros son iguales`)}
    //     else if(numero2 > numero1){
    //         alert(`El numero ${numero2} es el mayor`)
    //     } else{
    //        alert(`El numero ${numero1} es el mayor`)
    //     }

/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*/ 
    // let numero = parseInt(prompt("Escribe un numero"));
    // let numero2 = parseInt(prompt("Escribe un segundo numero"));
    // let numero3 = parseInt(prompt("Escribe un tercer numero"));
    // if (numero > numero2 && numero > numero3) {
    //     alert(`El numero mayor es el ${numero}`)
    // } else if (numero2 > numero3) {
    //     alert(`El numero mayor es el ${numero2}`)
    // } else {
    //     alert(`El numero mayor es el ${numero3}`)
    // }

/*
8.- Escribe un programa que pida un número y diga si es divisible por 2

*/
    // let numero=parseInt(prompt('Que numero necesitas saber si es divisible por 2?'))
    // if(numero %2 ===0){
    //     alert("Es divisible")
    // }else{
    //     alert('No es divisble')
    // }

/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

*/ 
    // hacer
/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

// let numero = parseInt(prompt("Escribe un numero por favor"));
// if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
//     if (numero % 2 === 0 ) {
//         alert("Es divisible por 2,");
//         } if (numero % 3 === 0 ){
//         alert("Es divisible  por  3");
//         }if (numero % 5 === 0 ){
//             alert("Es divisible  por  5");
//         } if (numero % 7 === 0 ){
//             alert("Es divisible  por  7");
//         }
// } else {
// alert("No es divisible  por 2, ni por 3, ni por 5, ni por 7");
// }

/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/ 
    //Esta agredo al 10