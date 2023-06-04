let btn=document.getElementById("btncalculadora")
btn.onclick =calcular= calcular(e){
e.preventDefault()

// entrada
let num=document.getElementById("num1").value
let num1=document.getElementById("num2").value
let op=document.getElementById("op").value

console.log(`el numero uno ${num} y el numero dos ${num1} y la op es ${op}`);

switch (op) {
    case 1:
        let suma=parseInt (num)+ parseInt (num1)
        alert(`la suma entre numero1 ${num} y numero2 ${num1} su total es de ${suma}`)
        break;
    case 2:
        let resta=parseInt(num)- parseInt(num1)
        // Acceder al div resultado 
        let res=document.querySelector(".resultado")
        res.innerHTML=`<p> la resta entre ${num} y ${num1} es igual a ${resta}`
        break
    case 3: 
        let multilicacion= parseInt(num) * parseInt(num1)
        alert(`la multiplicacion ente ${num}  y ${num1} es ${multilicacion}`)

        break;
    case 4: 
        let divi=parseInt(num)/parseInt (num1)
        let divicion=document.querySelector(".resultado")
        divicion.innerHTML=`<p> la divicion entre ${num} y ${num1}  es ${divi}`
    default:
        break;
}
}
