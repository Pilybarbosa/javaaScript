/*metodos para definir funciones 1. funcion por declaracion*/
function saludar () {
    // tareas de la funcion
    console.log("buenos dias por la mañana ")

}
// invocar o llamar la funcion 
/* saludar()




function sumar(n1,n2)/*parametros { 
    console.log( `la suma entre ${n1} y ${n2} es igual a ${n1+n2}`)

}sumar(numberOne,numberTwo)/* argumentos

 funciones co valor de retorno */ 
let numberOne=parseInt(prompt("ingrese su numero "))
let numberTwo=parseInt(prompt("ingrese otro numero "))

 /*function suma(n1,n2) {
  let  suma=n1+n2 
  return suma
   
} console.log(`la suma es ${suma(15,26)}`)
let resultado=sumar(numberOne,numberTwo) */



/* funcion por exprecion */
let  restar= function retsra( n1,n2) {
    console.log(`la resta  entre ${n1} y ${n2} es igual a ${n1-n2}`)
    
}
resta=numberOne-numberTwo

let multiplicar= function multiplicar (n1,n2) {
    return n1*n2
    
}
console.log(`la multiplicacion de los numero es ${multiplicar(numberOne,numberTwo)}`)

/* funcion row o flecha */
let divi=(n1,n2)=>{
    console.log(`la sivion entre ${n1} y ${n2} es igual a ${divi}`)
}
 divi(numberOne,numberTwo)