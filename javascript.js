/*
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/ 
    // alert('Hola a todos los Rollings')

/*
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (console.log).

*/
    // console.log('Hola a todos desde consola')

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
    let numero1=parseInt(prompt('Ingresa el primer numero para valida'));
    let numero2=parseInt(prompt('Ingresa el segundo para validar'))

    if(numero1===numero2){
        alert(`Los numeros son iguales`)}
        else if(numero2>numero1){
            alert(`El numero ${numero2} es el mayor`)
        } else{
           alert(`El numero ${numero1} es el mayor`)
        }
    
