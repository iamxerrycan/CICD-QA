const { validationfoem , submit } = require('../../function/formfalidation');

describe('validationfoem', () => {
  test('validationfoem function', () => {
    const formdata = {name:"sudhanshu", email:"sudhanshu@gmail.com", password:"123456"};
    const error = validationfoem(formdata);
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

