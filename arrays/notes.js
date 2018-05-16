// const notes = ['eat out', 'dinner', 'go for walk']
// notes.pop()
// notes.push('code')
// notes.unshift('hello world')
// console.log(notes)
//index start at 0 

//splice

const notes = [{
    title:'codding everyday',
    body:'getting better at codding'
}
,{
    title:'running',
    body:'running everyday'

},{
    title:'networking',
    body:'better netwoking'
}]
// notes.splice(1, 1 )
// console.log(notes)


// const findNote = function (notes, noteTitle){
//         const index = notes.findIndex(function(note, index){
//             return note.title.toLowerCase() === noteTitle.toLowerCase()
//         })
//         return notes[index]
//     }

const findNote = function (notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

}

const note =  findNote(notes, 'running')
console.log(note)

// //for each
// // callback function is a function called in a function 
// notes.forEach(function(item){
//     console.log
// })

// // find if something exit in an array 
// //use tipple equlity to find what we are looking but does not work with an array of object
// console.log(notes.indexOf('dinner'))

// // findindex
// const index = notes.findIndex(function(note, index){
//  return notes.title === 'codding everyday'
// }) 

// console.log(index)
