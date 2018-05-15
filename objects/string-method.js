let name = 'FELIX ghislain'

// length property
console.log(name.length)

// convert to upper case 

console.log(name.toUpperCase())

// includes method 
//let password = 'abcd'


//trim
console.log(name.trim())


let isValid = function(password){
    return password.length > 8 && password.includes('password') === false
}


console.log(isValid('hel'))