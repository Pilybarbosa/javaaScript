function calcular(P) {
    P.preventDefault()
    
 // entrada
 let p=document.getElementById("p").value
if (  2==1){
 // de grados celsius a fahrenheit
        let temperatura=(1.8*p)+32
        alert(`su temperatura es ${temperatura}`)
} else
if (2==3) {
  // de grados celsius a kelvin
    let temperatura1=p+273.15
        alert(`su temperatura en grados kelvin ${temperatura1}`)
        
} else
if (3==1) {
    // de grados kelvin a fahrenheit
        let temperatura2=((p-273.15)*1.8)+32
        alert(`su temperatura de grados fahrenheit es ${temperatura2}`)
} else {
} if (3==2) {
     //de grados kelvin a celsius
        let temperatura3=((p-273.15)*18)+32
        alert(`su temperatura en grados celsius es ${temperatura3}`)
} else {
    
} if (1==3) {
     // de grados fahrenheit a celsius
            let temperatura4=(p-32)/1.8
            alert(`sus grados celsius son ${temperatura4}`)
} else {
    // de grados fahrenheit a grados kelvin
    let temperatura5=P-273.15
    alert(`su temperatura en grados celsius es ${temperatura5} `)
}


  

        

        
        
}
