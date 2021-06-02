const Engineer = require("../lib/Engineer");

test("Constructor accepts and returns github property", () => {
    const testEngineer = new Engineer("Matthew", 12, "testemail@test.com", "testGitHub");
    expect(testEngineer.github).toBe("testGitHub");
});

test("getGitHub function returns correct github", () => {
    const testEngineer = new Engineer("Matthew", 12, "testemail@test.com", "testGitHub");
    expect(testEngineer.getGitHub()).toBe("testGitHub");
});

test("getRole function returns correct role", () => {
    const testEngineer = new Engineer("Matthew", 12, "testemail@test.com", "testGitHub");
    expect(testEngineer.getRole()).toBe("Engineer");
});