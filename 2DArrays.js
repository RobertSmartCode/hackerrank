var arr= [
    [1, 1, 1, 0, 0, 0]
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]


function relojArena(arr){
    let maxSum=-63
    for(var i=0; i<4; i++){
    
        for(var j=0; j<4; j++){
            let L=arr[i][j]
            let top =arr[i][j] + arr[i][j+1] + arr[i][j+2]
            let mid =arr[i+1][j+1]
            let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            let currentSum=top+mid+bot
            maxSum= Math.max(maxSum, currentSum)
        }
    }
    return maxSum
}
console.log(maxSum);