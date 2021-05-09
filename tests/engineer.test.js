const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "stephenjkurtz@gmail.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "stephenjkurtz@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "stephenjkurtz@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});