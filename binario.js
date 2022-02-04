function convertir(n){
let b = []
while(n>1){
    
    b.push(n % 2)
    n= Math.floor(n/2)
   
}
b.push(n)
return parseInt(b.reverse().join(''))
}
console.log(convertir(3));
