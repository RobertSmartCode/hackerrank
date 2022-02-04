function convertir(n){
let b = []
let c
while(n!=0){ 
    b.push(n % 2)
    n= Math.floor(n/2)
}
b.push(n)
c=b.reverse()

var max = 0;
var cur = 0;
for(var i=0; i<c.length; i++ ){
    if(c[i]==1){
        cur++;
    }else if(c[i]==0){
        if(cur>max){
            max=cur
            cur=0
        }
    }
}
if(cur>max){
    max=cur;
}
console.log(max);
console.log(c);
return parseInt(c.join(''))
}
console.log(convertir(35));
