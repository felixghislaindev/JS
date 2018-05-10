
let greetuser = function(){
    console.log("welcome user");
}

let square = function(num){
    let squarenum = num * num
    return  squarenum

}
greetuser();

let value = square(2)
console.log(value)


let convertFarenheitToCelsius = function(num){

    let celsuis =  (num -32) * 5 / 9 
    return celsuis;
}
let result = convertFarenheitToCelsius(68)
console.log(result);