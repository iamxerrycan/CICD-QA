const { validateForm } = require('../../function/formfalidation')

test("valid form returns no errors", () => {
  const result = validateForm({
    name: "John Doe",
    email: "test@mail.com",
    password: "secure123"
  });
  expect(result).toEqual({});
});

test("missing fields return errors", () => {
  const result = validateForm({});
  expect(result).toHaveProperty('name');
  expect(result).toHaveProperty('email');
  expect(result).toHaveProperty('password');
});
