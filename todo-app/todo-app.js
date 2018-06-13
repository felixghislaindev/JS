'use strict'

let todos = getSavedTodos()


// 
// const Ps = document.querySelectorAll('p')
let count = 0



const filters = {
  searchText: '',
  hideCompleted: false,
  sortBY:'lastAdded',
  
}


renderTodos(todos, filters)



document.querySelector('#add-todo').addEventListener('input', (event) =>{
 
  filters.searchText = event.target.value
  renderTodos(todos,filters)
})


// 
document.querySelector('#Todo-form').addEventListener('submit', (e) =>{
  // prevent default behavior 
  const timeStamp = moment().valueOf()
  e.preventDefault()
 const newTodo = 
 { id: uuidv4(),
   title:e.target.elements.TODO.value ,
   createdAt:timeStamp,
   updatedAt:timeStamp,

   completed : false}
const id = newTodo.id
console.log(id)


   todos.push(newTodo)
   saveTodo(todos)
   renderTodos(todos,filters)
  e.target.elements.TODO.value = ''
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#checked').addEventListener('change', (e) =>{
  filters.hideCompleted = e.target.checked
  renderTodos(todos,filters)
})

document.querySelector('#choice').addEventListener('change', (e) =>{
 filters.sortBY = e.target.value
 
 renderTodos(todos, filters)
})

window.addEventListener('storage', (e) =>{
  if(e.key === 'todos'){
    todos = JSON.parse(e.newValue)
    renderTodos(todos,filters)
  }
})



