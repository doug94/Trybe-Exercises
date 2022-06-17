const sum = require("./sum");

describe("Validation of the sum feature", () => {
    it("sum of numbers 4 and 5 equals 9", () => {
        expect(sum(4, 5)).toBe(9);
    });
    it("sum of numbers 0 and 0 equals 0", () => {
        expect(sum(0, 0)).toBe(0);
    });
    it("attempt to sum a number and a string throws an error", () => {
        expect(() => sum(4, "5")).toThrow();
    });
    it(`attempt to sum anything other than two numbers throws the error message "parameters must be numbers"`, () => {
        expect(() => sum(4, "5")).toThrow("parameters must be numbers");
    });
});