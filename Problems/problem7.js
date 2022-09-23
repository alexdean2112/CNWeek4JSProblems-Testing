/*
Problem: Given ANY single sentence, return the length of the last word.
*/

exports.lastWord = (str) => {
    str = str.replace(/[^\w\s\']|_/g, "")
    const newArray = str.trim().split(" ")
    return newArray[newArray.length -1].length
}
