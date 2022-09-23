const { elementFinder } = require("../Problems/problem3");

describe("element finder", () => {
    test("should return banana when given ['apple', 'banana', 'cherry'] and 2", () => {
        const testArray = ['apple', 'banana', 'cherry']
        expect(elementFinder(testArray, 2)).toBe('banana')
    })
    test("should return cherry when given ['apple', 'banana', 'cherry'] and 3", () => {
        const testArray = ['apple', 'banana', 'cherry']
        expect(elementFinder(testArray, 3)).toBe('cherry')
    })
})