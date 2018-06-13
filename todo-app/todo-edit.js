'use strict'

//selectors
const titleELement = document.querySelector('#todo-title')
const completedELement = document.querySelector('#todo-complete')
const removeElement = document.querySelector('#remove-todo')
const timeSpanElement =  document.querySelector('#time-span')

const todoId = location.hash.substring(1)
//non inculusive 


let todos = getSavedTodos()


let todo = todos.find((todo) => todo.id === todoId)


if(!todo){
    location.assign('/todo-app.html')
}
//timestanp formating 




titleELement.value = todo.title
completedELement.value = todo.completed
timeSpanElement.textContent = lastEdited()




//save one change and editing todo
titleELement.addEventListener('change', (e) =>{
    todo.title = e.target.value
    todo.updatedAt = moment().valueOf()
    timeSpanElement.textContent = lastEdited()
    saveTodo(todos)
    // renderTodos(todos,filters)
})

completedELement.addEventListener('change', (e) =>{
    todo.completed = JSON.parse(e.target.value)
    todo.updatedAt = moment().valueOf() 
    timeSpanElement.textContent = lastEdited()
    saveTodo(todos)
})
//removing todo
removeElement.addEventListener('click', () =>{
    if(todo.id === todoId){
        removeTodo(todo.id)
        saveTodo(todos)
        location.assign('/todo-app.html')
    }
    
})

//listener to the windows 
// global event listener 
window.addEventListener('storage', (e) => {
  if(e.key === 'todos'){
    todos = JSON.parse(e.newValue)
    
let todo = todos.find((todo) => todo.id === todoId)
if(!todo ){
    location.assign('/todo-app.html')
}
titleELement.value = todo.title
 completedELement.value = todo.completed
 timeSpanElement.textContent = lastEdited()
  }  
})

