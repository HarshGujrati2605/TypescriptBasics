"use strict";
const car = { type: "Swift", model: "zxi", year: 2024 };
console.log(car);
//modify car
car.type = "WagonR";
//car.type = 2
console.log(car);
//Type inference
const bike = { type: "Apache" };
bike.type = "Rider";
//bike.type = 2000 not allowed as type inference is string
console.log(bike);
//Optional values object
const bus = { type: "Volve", model: 2024 };
console.log(bus);
