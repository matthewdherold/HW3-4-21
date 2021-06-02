const Employee = require("../lib/Employee");

test("Constructor accepts and returns name property", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.name).toBe("Matthew");
});

test("Constructor accepts and returns id property", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.id).toBe(12);
});

test("Constructor accepts and returns email property", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.email).toBe("testemail@test.com");
});

test("Constructor returns role property", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.role).toBe("Employee");
});

test("getName function returns correct name", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.getName()).toBe("Matthew");
});

test("getId function returns correct id", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.getId()).toBe(12);
});

test("getEmail function returns correct email", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.getEmail()).toBe("testemail@test.com");
});

test("getRole function returns correct role", () => {
    const testEmployee = new Employee("Matthew", 12, "testemail@test.com");
    expect(testEmployee.getRole()).toBe("Employee");
});