/*
Creata a function that accepts two values as arguements and then generates an
array of numbers between the two values
*/

exports.arrayGenerator = (min, max) => {
    const arr = [];
    for (let i = min; i <= max; i++) arr.push(i);
    return arr;
}