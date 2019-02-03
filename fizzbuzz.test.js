const fizzbuzz = require('./fizzbuzz');

test('Write a method fizzbuzz(num)', () => {
    expect(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
});

test('A number is Fizz if it is divisible by 3', () => {
    expect(fizzbuzz([1,2,3,4,6,7,8,9,11,12,13,14])).toBe("1,2,Fizz,4,Fizz,7,8,Fizz,11,Fizz,13,14");
});

test('A number is Buzz if it is divisible by 5', () => {
    expect(fizzbuzz([1,2,4,5,7,8,10,11,13,14])).toBe("1,2,4,Buzz,7,8,Buzz,11,13,14");
});

test('A number is FizzBuzz if it is divisible by 3,5', () => {
    expect(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toBe("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz");
});