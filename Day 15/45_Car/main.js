"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Honda", "Civic", { Color: "White", Year: "2024" });
console.log(myCar);
const Car2 = createCar("toyota", "2022", { Color: "Black", isSunrof: "False" });
console.log(Car2);
