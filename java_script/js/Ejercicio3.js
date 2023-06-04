let numberOne, numberTwo;

numberOne=prompt("ingrese su primer numero ")
numberTwo=prompt("ingrese su segundo numero ")
if (numberOne>numberTwo) {
    alert(`el numero mayor es ${numberOne}` )
} else if(numberOne==numberTwo)  {
    alert(`los numeros son iguales `)
} else {
    alert(`el numero mayor es  ${numberTwo}`)
}

