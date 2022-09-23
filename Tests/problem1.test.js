const { add } = require("../Problems/problem1");

describe("add function", () => {
    test("should return 5 when given 2 and 3", () => {
        expect(add(2,3)).toBe(5)
    })
})
