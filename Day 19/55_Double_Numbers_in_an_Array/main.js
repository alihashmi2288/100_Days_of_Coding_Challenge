//Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [1, 2, 3, 4, 5, 6];
var doubleNumber = numbers.map(function (number) { return number * 2; });
console.log(doubleNumber);
