// Your code goes here
const rapid = (newString) => {
    let newWord = '';

    for (var i = 0; i < newString.length; i++) {
        let char = newString[i].toUpperCase()

        if(!'AEIOU'.includes(char)) {
            newWord = newWord + char;
        }
    }

    return newWord;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
