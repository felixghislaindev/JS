//retutning object let us return mutiple data back



let mybook = {
    title: '1984',
    author:'Geaorge Orwell',
    pagesCount: 326
}

let otherbook = {
    title: 'American sniper',
    author:'Molly',
    pagesCount: 388
}

let booksumary = function(book){
console.log(`${book.title} by ${book.author}`)
}

booksumary(mybook)
booksumary(otherbook)


let convert = function(num){
    let celsuis =  (num -32) * 5 / 9 
    let kelvin = celsuis + 273.15
console.log(num);
    return{
        fahren:`${num}`,
        celtemp:`${celsuis}`,
        kelvtemp:`${kelvin}`
    }
}

let result = convert(86)
console.log(`you converted ${result.fahren} with result of ${result.celtemp} in celsuis and ${result.kelvtemp} in kelvin `)