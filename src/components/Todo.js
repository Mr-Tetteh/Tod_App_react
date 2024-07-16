import '../css/styles.css'

export default function Todo({todoItem, todoList, setTodoList}) {
    const deleteTodo = () =>{

        setTodoList(todoList.filter((item => item.id !== todoItem.id)));
    }
    return (<div>
        <div className='todoitem'>
            <h3  className='todname'>{todoItem.name}</h3>
            <button onClick={deleteTodo} className='deletebutton'>Done</button>
        </div>
    </div>)
}