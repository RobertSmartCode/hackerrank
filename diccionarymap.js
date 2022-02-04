
let message = [3,'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry']

var n = parseInt(message[0]);
var agenda = {}
let processData= ()=> {
    //Enter your code here
    let l=''
    for(var i=(1); i<(n+1); i++){
        let l = message[i]
        let r = l.split(' ')
        agenda[r[0]]=r[1]  
    }
    
    for(var y=(n+1); y<(2*n+1); y++){
        let l = message[y]
      if(agenda[l]){
        console.log(`${l}=${agenda[l]}`);  
      }else{
        console.log('Not found')
      }  
 }
} 
processData()


// for(var y=(n+1); y<(2*n+1); y++){
//     let k= Object.keys(agenda)
//     let m=Object.values(agenda)
//     for (var p = 0; p < k.length; p++) {
//         if (k[p] === message[y]) {
//              console.log(`${k[p]}=${m[p]}`); 
//         }
//     }  
// }
// console.log('Not found');
