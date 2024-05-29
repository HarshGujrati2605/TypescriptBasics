const car : {type: string , model :string , year: number} ={type : "Swift" , model:"zxi" , year: 2024};
console.log(car)

//modify car
car.type = "WagonR"
//car.type = 2
console.log(car)

//Type inference
const bike = {type : "Apache"}
bike.type = "Rider"
//bike.type = 2000 not allowed as type inference is string
console.log(bike)

//Optional values object

const bus :{type : string , model: number , yearofmfg ?:number } = {type :"Volve" , model:2024}
console.log(bus)