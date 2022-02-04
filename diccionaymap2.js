const splitInput = [3,'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry']
const phoneBookSize = +splitInput[0];
const inputValue = splitInput.slice(phoneBookSize + 1);

const temp = splitInput.slice(1, phoneBookSize + 1).map(list => {
    let result = {
        name: list.split(" ")[0],
        phoneNumber: list.split(" ")[1]
    }
    return result;
});
console.log(temp);
let phoneBook = [];
for (let list of temp) {
    phoneBook[list.name] = list.phoneNumber;
}
console.log(phoneBook);

for (let name of inputValue) {
    if (phoneBook[name]) {
        console.log(`${name}=${phoneBook[name]}`);
    } else {
        console.log('Not found')
    }
}