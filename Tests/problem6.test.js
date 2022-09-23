const { arrayGenerator } = require("../Problems/problem6");

describe("array generator", () => {
    test("should return an array of [1,2,3] when given 1,3 as arguements", () => {
        expect(arrayGenerator(1,3)).toEqual([ 1, 2, 3 ])
    })
    test("should return an array of [-2,-1,0,1,2,3,4,5] when given -2,5 as arguements", () => {
        expect(arrayGenerator(-2,5)).toEqual([ -2, -1, 0, 1, 2, 3, 4, 5 ])
    })
    test("should return a length of 4 when given 1,4 as arguments", () => {
        expect(arrayGenerator(1,4)).toHaveLength(4)
    })
})