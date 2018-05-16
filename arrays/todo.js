// const todo = ['code', 'eat', 'game', 'interview', 'sleep']

// console.log(`you have ${todo.length} todos`)
// console.log(todo)

// // todo.splice(2,1)
// // todo.push('running')
// // todo.shift()
// // console.log(todo)

// // todo.forEach(function(item,index){
// //     const num = index + 1
// //     console.log(`${num}. ${item}`)
// // })

// // //use the foor when we want to run a code a specific number of time 
// // //  intializer condition  increments
// // // the count variable is locally scope to the for statement
// // //{``} this are called template strings  
// // for(let count = 0; count < todo.length; count++){
  
// //     console.log(`${count + 1}.${todo[count]}`)
// // }

const todos = [{
    title: 'code',
    completed: 'true'
    },
    {
    title: 'eat',
    completed: 'true'
    },
    {
    title: 'sleep',
    completed: 'false'
    },
    {
    title: 'gym',
    completed: 'false'
}]


const findAndRemove = function(todos, todotitle){
    const index = todos.findIndex(function(todo,index){
        return todo.title === todotitle
    } )
    if(index > -1){
        todos.splice(index, 1)
    }
    
    return todos.forEach(function(todo, index){
        console.log(`${index + 1}. ${todo.title}`)
    })
}

findAndRemove(todos, 'gymddd')

