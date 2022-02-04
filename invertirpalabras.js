let processData= ()=> {
    //Enter your code here
    let str = 'Rank';
    let arr = str.split('');
    A='';
    B='';
    for(var i=0; i<arr.length; i++){
        if(i%2===0){
            A+=`${arr[i]}`
          
        }else if(i%2!=0){
            B+=`${arr[i]}`
          
        }
      
    }
    console.log(`${A} ${B}`)
   
    
} 
processData()
