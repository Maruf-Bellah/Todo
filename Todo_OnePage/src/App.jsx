
import './App.css'
import todo from './component/img/todo.jpg';
import {RiTodoLine} from 'react-icons/ri'
import Practice from './component/practice/Practice';
import Todo from './component/Todo';

function App() {


  return (
 
    <div className='text-dark'>
      <div>
        <img src={todo} alt="" width={'100px'} />
      </div>
        <h5 className='text-success bolder'> <RiTodoLine/> THIS IS TODO LIST <RiTodoLine/>  </h5>
      <div className='bg-dark shadow-lg rounded-3 p-5'>
      {/* <Todo></Todo> */}
      <Practice></Practice>
      </div>
    </div>

  )
}

export default App
