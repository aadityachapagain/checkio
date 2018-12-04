Redux = require('Redux')

initState = {
  todo: [],
  todotime: [],
  post: [],
  posttime: [],
}

const { createStore } = Redux;

function myReducer( state = initState, action){
  if (action.type == 'ADD_TODO'){
    return{
      // using IIFE ( immediately invoked function expression ) to get date string inside array
      ...state,
      todo: [...state.todo,action.todo],
      todotime: [...state.todotime, (function (date){return date.toUTCString()}(new Date()))]
    }
  }

  if (action.type == 'ADD_POST'){
    return{
      // using IIFE ( immediately invoked function expression ) to get date string inside array
      ...state,
      post: [...state.todo,action.todo],
      posttime: [...state.posttime, (function (date){return date.toUTCString()}(new Date()))]
    }
  }
}

const store = createStore(myReducer)
store.subscribe( () =>{
  console.log("state updated !")
  console.log(store.getState())
  }
)

const todoAction = {type: 'ADD_TODO', todo: 'implement dota spyder'}

store.dispatch(todoAction)
store.dispatch({type: 'ADD_TODO', todo: 'Run the API '})
store.dispatch({type: 'ADD_POST', todo: 'Surver just got started'})
store.dispatch({type: 'ADD_TODO', todo: 'Fetch the data in React'})
store.dispatch({type: 'ADD_POST', todo: 'Data has been dispatched to react'})
