let ourTuple: [number, boolean, string];
ourTuple = [1 , true , "Gopi"]
console.log(ourTuple)
ourTuple.push("SOmething")
console.log(ourTuple)
//readonly Tuple
let tuple : readonly [number , string] = [ 1,"Gopi"]
//tuple.push shows an error as it is only readonly

console.log(tuple)

//Named Tuple
let graph:[x :number , y: number]
graph =[2,3]
console.log(graph[0])