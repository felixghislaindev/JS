//construtor function 
//prototypal inheritance 
// extends provide class inheritance 
//super 
class Hangman{
    //constructor function 
    constructor(word , guessesNum){
        this.word = word.toLowerCase().split('')
  
        this.guessesNum = guessesNum
        this.guessedLetters = []
        this.status = 'playing'
    
    }
    get Puzzle(){
        let puzzle  = ''
    this.word.forEach((letter) =>{
        this.guessedLetters.includes(letter) || letter === ' ' ?  puzzle += letter : puzzle += '*'
    })
   
    return puzzle
    }

    makeGuess(Letter){
        Letter = Letter.toLowerCase()
        const characters = /[A-z]/gi;
            // 
                if(this.status !== 'playing'){
                    return
                }
    
                if(Letter.match(characters) && !this.guessedLetters.includes(Letter)){
                    console.log('matching')
                    console.log('letter will be added')
                    this.guessedLetters.push(Letter)
                   
                } 
                if(!this.word.includes(Letter)){
                   
                 this.guessesNum--;
                }
    
    }

      gameStatus(){
        const finsished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if(this.guessesNum === 0){
           this.status = 'Game over'}
           else if(finsished){
          
               this.status = 'well done you won'
           } else{ this.status = 'playing'}
           
    }

    get gameMessage(){
        const theWord = this.word.join('')
        if(this.status === 'playing'){
            return `Guesses left: ${this.guessesNum}`
        } else if(this.status === 'Game over'){
            return `nice try! the word was ${theWord}`
        } else{
            return `Good Job Your Guess Was Correct`
        }
    }
}











