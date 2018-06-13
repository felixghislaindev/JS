// const square = () =>{

// }

//short hand sentax
const square = (num) => num * num 
//difference between arro and rgular function
// only use the arrow short hand fucntion is you arew returning a single value  
const people = [{
    name: 'felix',
    age:23
},
{
    name: 'jena',
    age:22
},
{
    name: 'mark',
    age:27
}]

const equal22 = people.filter((person) => person.age <=22)
console.log(equal22)