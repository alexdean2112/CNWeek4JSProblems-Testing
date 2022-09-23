/*
Write a function that takes a string as an argument
Extract the last characters from the string using another argument
Return the result
*/

const stringSlicer = (str, num) => {
    return str.slice(-num);
}

module.exports = {
    stringSlicer,
}