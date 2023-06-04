function calcular(e) {
    e.preventDefault()
    
   
 // entrada 
 let p=document.getElementById("p").value
 let op=parseInt(document.getElementById("op").value)

 
switch (op) {
    case 1:
        
        alert(`su longitud es ${p.length}`)
        break;
    case 2:
        
       
        console.log(p.toUpperCase())
        break
    case 3: 
       
    
        alert(p.toLowerCase())

        break;
    case 4: 
       
    default:
        break;

        
        
}
}
