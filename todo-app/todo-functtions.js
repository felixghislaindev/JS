'use strict'
//read existing not from local storage 
const getSavedTodos =  () => {
    const todosJson = localStorage.getItem('todos')
    try{
      return todosJson ? JSON.parse(todosJson) : [] 
    } catch(e){
      return []
    }

 }


// getnerate todo html
const getnerateTodo = (todo) => {
   
    const p = document.createElement('div')
    const textel = document.createElement('a')
    
  const checkbox = document.createElement('input')
  const deleteButton = document.createElement('button')
  


// set up checkbox 
  checkbox.setAttribute('type', 'checkbox')
  p.appendChild(checkbox)
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', () =>{
    markAsdone(todo.id)
    saveTodo(todos)
    renderTodos(todos,filters)
  })
 
  

 // setup the todo paragraph 
   
   textel.textContent = todo.title

    textel.setAttribute('href', `/edit.html#${todo.id}`)




    deleteButton.textContent = 'Delete'
    p.appendChild(textel)


//set up the delete button 
    p.appendChild(deleteButton)
    deleteButton.addEventListener('click', () =>{
      const id = todo.id
      removeTodo(id)
      saveTodo(todos)
      renderTodos(todos,filters)
    })
    return p

}

// genearte not completed sumary 
const getnerateSumary = (notCompleted) => {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${notCompleted.length} todo left`
    
    return summary
}
// sorting the todos 
const sorttodo = (todos, sortBY) => {
 
  if(sortBY === 'lastAdded'){
    
    
    return todos.sort((a,b) =>  {
      if(a.updatedAt > b.updatedAt){
        return -1
      }  if(a.updatedAt < b.updatedAt){
        return 1
      } else{
        return 0
      }
    })
  } else if(sortBY === 'bycreated'){
    return todos.sort((a,b) => {
      if(a.createdAt > b.createdAt){
        return -1
      }  if(a.createdAt < b.createdAt){
        return 1
      } else{
        return 0
      }
    })
  } else if( sortBY === 'byalphabetical'){ return todos.sort((a,b) => {
    if(a.title < b.title){
      return -1
    }  if(a.title > b.title){
      return 1
    } else{
      return 0
    }
  })}
 
  
  else {return todos}
}


// render 
const renderTodos = (todos, filters) => {
   
  sorttodo(todos,filters.sortBY)
  
  // sortCreated(todos,filters.created)
  
 
  let filterTodos = todos.filter((todo) => todo.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  
  filterTodos = filterTodos.filter( (todo) =>{
    if(filters.hideCompleted){
      return !todo.completed
    } else{
      return true 
    }
  })
    const notCompleted =  filterTodos.filter((todo) => !todo.completed)
  
    document.querySelector('#todo').innerHTML = ''
  
    const sumary = getnerateSumary(notCompleted)
    document.querySelector('#todo').appendChild(sumary)
    
    filterTodos.forEach(function(todo){
     const p = getnerateTodo(todo)
     
      document.querySelector('#todo').appendChild(p)
    })
  }

const saveTodo = function(todo){
    localStorage.setItem('todos', JSON.stringify(todos))
}


// debugger 
// debuggin tool 

const removeTodo = (id) => {
// find note position in the based on the id 
const todoIndex = todos.findIndex((todo) => todo.id === id)
if(todoIndex >- 1){
  todos.splice(todoIndex,1)
}
}

const markAsdone = (id) => {
const todo =  todos.find((todo) => todo.id === id)

  if(todo !== undefined){
    todo.completed = !todo.completed
  }

}

// generate last edited message 
const lastEdited = () =>`Last edidted ${moment(todo.updatedAt).fromNow()}`