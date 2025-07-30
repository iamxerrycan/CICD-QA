const { validateForm } = require("../../function/formvalidation");

test("valid form returns true", () => {
  const result = validateForm({ email: "test@mail.com" });
  expect(result).toBe(true);
});
