const { arraySorter } = require("../Problems/problem4");

describe("array sorter", () => {
    test("should return [a,b,c] when given [c,b,a]", () => {
        expect(arraySorter(["c", "b", "a"])).toEqual(["a", "b", "c"])
    })
    test("should have a length equal to 3 when given [c,b,a]", () => {
        expect(arraySorter(["c", "b", "a"])).toHaveLength(3)
    })
})