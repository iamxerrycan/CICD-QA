const { add, isEven , asyncdata , dubarray } = require('../../function/calculator'); 




describe('calculator', () => {
  test('add function', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('isEven function', () => {
    expect(isEven(2)).toBe(true);
  });
});

describe('asyncdata', () => {
  test('asyncdata function', async () => {
    const data = await asyncdata();
    expect(data).toBe('async data here');
  });
}
);

describe('dubarray', () => {
  test('dubarray function', () => {
    const arr = [1, 2, 3, 4, 4, 5, 2, 9];
    const newarr = dubarray(arr);
    expect(newarr).toEqual([1, 2, 3, 4, 5,9]);
  });
} );

