const Manager = require("../lib/Manager");

test("Constructor accepts and returns number property", () => {
    const testManager = new Manager("Matthew", 12, "testemail@test.com", 123456789);
    expect(testManager.number).toBe(123456789);
});

test("getNumber function returns correct number", () => {
    const testManager = new Manager("Matthew", 12, "testemail@test.com", 123456789);
    expect(testManager.getNumber()).toBe(123456789);
});

test("getRole function returns correct role", () => {
    const testManager = new Manager("Matthew", 12, "testemail@test.com", 123456789);
    expect(testManager.getRole()).toBe("Manager");
});