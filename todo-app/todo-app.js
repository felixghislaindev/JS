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
// 
const Ps = document.querySelectorAll('p')
let count = 0

todos.forEach(function(todo){
  
  if(!todo.completed){
    count +=1
    
  }
const Todo = document.createElement('p')
Todo.textContent = todo.title
document.body.appendChild(Todo)
  
})


const todosLeft = document.createElement('h2')
todosLeft.textContent = (' you have ' + count + ' todos left ')
document.body.appendChild(todosLeft)

//filter for not completed 
// const imcomplete = todos.filter(functtion (todo){
//   return !todo.copleted
// })

// event listener is a function to run when something appen ex click, scroll ...
document.querySelector('#create-note').addEventListener('click', function(){
  console.log('hello human')
})

//queryseltor mostly used for id and selctorll mostly used for classes 

document.querySelector('#add-todo').addEventListener('input', function(event){
  console.log(event.target.value)
})