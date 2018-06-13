

// hasOwnProperty 
//object:myobject  --> Object.proprety -->
//class syntax 
// HTTP heyper text transfer protocol is a request response protocol 
//request - what do we want to do - generate new wortd or phrase 
// response - what was actually done - send back our answer to us so we can use it in our app 
//status code describe how request went 


const puzzleWord = document.querySelector('#puzzle')
const guessRemain = document.querySelector('#guessLeft')
let hang1 

           

window.addEventListener('keypress',(e) =>{
   const lettter = String.fromCharCode(e.charCode)
    hang1.makeGuess(lettter)
    render()
    hang1.gameStatus()
    
    
    console.log(hang1.gameMessage)
  
})
const render = () =>{
    puzzleWord.textContent = hang1.Puzzle
    guessRemain.textContent = hang1.gameMessage
}

const startGame = async () =>{
    const puzzle = await getPuzzle('2')
    hang1 = new Hangman(puzzle, 5)
    render()
    console.log(puzzle)
}

document.querySelector('#reset').addEventListener('click', startGame)


// getPuzzle('2').then((puzzle) =>{
//     console.log(puzzle)
// }).catch((err) =>{
//     console.log(`error ${err}`)
// })

startGame()
















// getCountryDetails('GB').then((country) =>{
//     console.log(country.name)
// }).catch((err) =>{
//     console.log(`${err}`)
// })



//promise chaining 

// geoLocation().then((location) =>{
//     return getCountryDetails(location.country)
// }).then((country) =>{
//     console.log(country.name)
// }).catch((err) =>{
//     console.log(`${err}`)
// })


// getCurrentCountry().then((country) =>{
//     console.log( country.name)
// }).catch((err) =>{
//     console.log(`${err}`)
// })

//fetch api
//fetch return a promise 
// json will parse the response as json 
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200){
//         return response.json()
//     }
//     else{
//         throw new Error('unable to fetch data')
//     }
// }).then((data) =>{
//     console.log(data.puzzle)
// }).catch((error) =>{
//     console.log(error)
// })