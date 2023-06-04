let op, aletario, valorApostar, valorGlobal, valorDuplicado, valorTotal, valorResta, nombre,op2=1;

 valorGlobal=parseInt(prompt(`ingrese valor global`))
    nombre=prompt(`ingrese su nombre `)
    function ganar(valorApostar,valorGlobal) { 
        valorGlobal=valorGlobal+(valorApostar*2)  
        return valorGlobal  
    }
    function perder(valorApostar,valorGlobal) { 
       valorGlobal=valorGlobal-valorApostar
       return valorGlobal
    }
    function lanzarMonedaInt() {
    return Math.floor(Math.random()*2);
  } console.log(lanzarMonedaInt(1));
    lanzarMonedaInt=lanzarMonedaInt()
do {
   valorApostar=parseInt(prompt(`cuanto desea apostar? `))
   if (valorApostar>valorGlobal){
    alert(`no puedes apostar un valor mayor al que o tienes en tu valor global `)
    valorApostar=parseInt(prompt(`cuanto desea apostar? `))
    op=prompt(`escoge 1. cara 2.sello `)
     
  if (op==1 && lanzarMonedaInt==1 ) {
    ganar=ganar()
  alert(`utt escogio ${op} y ha ganado`)
    valorGlobal=ganar(valorApostar, valorGlobal)
     alert(`${nombre} tu ganaste en total  ${valorApostar} y en total tienes ${valorGlobal} `)
}
else if(op==2 && lanzarMonedaInt==0){
    ganar=ganar()
    alert(`utt escogio ${op} y ha ganado`)
      valorGlobal=ganar(valorApostar, valorGlobal)
       alert(`${nombre} tu ganaste en total  ${valorApostar} y en total tienes ${valorGlobal} `)
  }
  else{
    alert(` ${nombre} utt ha perdido por lo tanto su total queda en ${valorResta}`)
     valorGlobal=perder(valorApostar,valorGlobal)
     alert(`${nombre} tu perdiste un total de  ${valorApostar} y en total tienes ${valorGlobal} `)
}
}
else {
    op=prompt(`escoge 1. cara 2.sello `)
  if (op==1 && lanzarMonedaInt==1 ) {
    ganar=ganar()
  alert(`utt escogio ${op} y ha ganado`)
    valorGlobal=ganar(valorApostar, valorGlobal)
     alert(`${nombre} tu ganaste en total  ${valorApostar} y en total tienes ${valorGlobal} `)
}
else if(op==2 && lanzarMonedaInt==0){
    ganar=ganar()
    alert(`utt escogio ${op} y ha ganado`)
      valorGlobal=ganar(valorApostar, valorGlobal)
       alert(`${nombre} tu ganaste en total  ${valorApostar} y en total tienes ${valorGlobal} `)
  }
  else{
    alert(` ${nombre} utt ha perdido por lo tanto su total queda en ${valorResta}`)
     valorGlobal=perder(valorApostar,valorGlobal)
     alert(`${nombre} tu perdiste un total de  ${valorApostar} y en total tienes ${valorGlobal} `)
}
}
op2=prompt("¿Quieres seguir apostando? 1.Si o 2.No")
   }while (op2=1)
   
   




