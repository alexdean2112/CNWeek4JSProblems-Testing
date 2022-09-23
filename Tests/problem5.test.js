const { operator } = require("../Problems/problem5");


describe("operator", () => {
    test("should return 0.5 if a = 5 and b = 10", () => {
        expect(operator(5,10)).toBe(0.5)
    })
        test("should return 50 if a = 10 and b = 5", () => {
            expect(operator(10,5)).toBe(50)
    })}
)