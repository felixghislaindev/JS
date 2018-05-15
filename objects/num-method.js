let num = 103.943

//to fix 
console.log(num.toFixed(2))


//guessing th number game 

// generating random number 
let min = 0
let  max = 5

let randomNum = Math.floor(Math.random() * (max - min  + 1)) + min



let guessNum = function(num){
    if(num === randomNum){
        return `you guess it correct the number was ${randomNum}`
    } else{
        return `you guest it wrong better luck next time`
    }
}

let result = guessNum(8)
console.log(result)