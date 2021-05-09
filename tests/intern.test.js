const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UPenn";
  const e = new Intern("Foo", 1, "stephenjkurtz@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "stephenjkurtz@gmail.com", "UPenn");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UPenn";
  const e = new Intern("Foo", 1, "stephenjkurtz@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});