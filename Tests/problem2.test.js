const { stringSlicer } = require("../Problems/problem2");

describe("String Slicer", () => {
    test("should return 'tyu' when given 'qwertyu' and 3", () => {
        expect(stringSlicer("qwertyu", 3)).toBe("tyu")
    })
    test("should return 4 when given 'qwertyui' and 4", () => {
        expect(stringSlicer("qwertyu", 4)).toHaveLength(4)
    })
})