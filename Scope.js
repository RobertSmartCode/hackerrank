const inputLines= [ '3', '1 2 5' ]

k=Number(inputLines.join().split(',',1).join())
l=inputLines.reverse().join().split(',',1).join().split(' ')
let Max=0
for(var i=0; i<k; i++){
    let J =Math.abs(l[0] - l[k]);
    if(J>Max){
        Max=J
    }
    let M=Math.abs(l[i] - l[i+1]);
    console.log(M);
    if(M>Max){
        Max=M
    }
}
console.log(Max);
