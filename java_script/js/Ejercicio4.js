let pasword, usuario ;
 

usuario=prompt("ingrese su usuario ")
pasword=prompt("ingrese su contraseña ")

if (usuario=="carolina" && pasword=="1234") {
    alert(`bienvenido a mi app   `)
} else if (usuario=="carolina" ) {
    alert(` UPS! parece que tus datos no considen`)
} else  if (pasword=="1234") {
    alert(` nombre de usuario invalido  `)
} else {
    alert(`acceso denegado`)
}


