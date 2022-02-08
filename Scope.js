const inputLines= [ '4', '1 2 5 9' ]
const length=+inputLines[0]
const array= inputLines[1].split(' ')

let max = 0;
let M = 0;

for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
        M= Math.abs(array[i]-array[j]);
        if(M>max){
            max=M
        }
    }
    
}
console.log(max);


