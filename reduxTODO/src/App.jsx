import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './features/store'
import TodoItem from './components/TodoItem'

function App() {
 

  return (
    <Provider store={store}>
    <AddTodo/>
    <TodoItem/>
    </Provider>
  )
}

export default App
