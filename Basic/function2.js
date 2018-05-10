// let add = function(num1,num2){
// let addNumber = num1 + num2
// return addNumber
// }

// let result = add(10 + 1)
// console.log(result);



let tip = function(total, tipPercent = .5){
    let percent = tipPercent * 100
    let totalTip = total * tipPercent

    return `A ${percent}% on $${total} would be $${totalTip}` 
}
let results = tip(100,.5)
console.log(results)


let name = 'felix'
console.log(`hello my name is ${name}`)