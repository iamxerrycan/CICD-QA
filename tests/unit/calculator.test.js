// const {add , isEven} = require('../function/calculator.js');

import {add , isEven} from '../function/calculator.js';

describe('calculator', ()=>{
  test('add function', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('isEven function', () => {
    expect(isEven(2)).toBe(true);
  });
})

