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
    completed: true
    },
    {
    title: 'eat',
    completed: true
    },
    {
    title: 'sleep',
    completed: false
    },
    {
    title: 'gym',
    completed: false
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

// filter completed todos 
// filter takes an arry an return a subset of the array with the result with wanted 

const checkIfcomplete = function(todos){
return todos.filter(function(todo, index){
        const isCompleted = todo.completed
        return !isCompleted
})
}

// sort todo 

const sortTodos = function(todos){
todos.sort(function(a, b){
    if(!a.completed && b.completed){
        return -1
    } else if (!b.completed && a.completed){
        return 1
    } else {
        return 0
    }
})

}
// console.log(checkIfcomplete(todos))
// findAndRemove(todos, 'gymddd')
sortTodos(todos)
console.log(todos)
