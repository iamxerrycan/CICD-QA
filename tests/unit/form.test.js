const { validateForm , submit } = require('../../function/formfalidation')

describe('validateForm', () => {
  test('validateForm function', () => {
    const formdata = {name:"sudhanshu", email:"sudhanshu@gmail.com", password:"123456"};
    const error = validateForm(formdata);
    expect(error).toEqual({});
  });
});    


describe('submit', () => {
  test('submit function', () => {
    const formdata = {name:"sudhanshu", email:"sudhanshu@gmail.com", password:"123456"};
    const error = submit(formdata);
    expect(error).toEqual({});
  });
});

