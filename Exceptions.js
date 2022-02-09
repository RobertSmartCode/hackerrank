
function main() {
    const S='nz'
    
try {
   let K= parseInt(S).toString().replace('NaN', 'Bad String')
    console.log(K);
} catch (e) {
    console.log('Bad String');
}

}
main()