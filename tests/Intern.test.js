const Intern = require("../lib/Intern");

test("Constructor accepts and returns school property", () => {
    const testIntern = new Intern("Matthew", 12, "testemail@test.com", "testSchool");
    expect(testIntern.school).toBe("testSchool");
});

test("getSchool function returns correct school", () => {
    const testIntern = new Intern("Matthew", 12, "testemail@test.com", "testSchool");
    expect(testIntern.getSchool()).toBe("testSchool");
});

test("getRole function returns correct role", () => {
    const testIntern = new Intern("Matthew", 12, "testemail@test.com", "testSchool");
    expect(testIntern.getRole()).toBe("Intern");
});