import '../css/styles.css'

export default function Form({todo, setTodo, todoList, setTodoList}) {
    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todo)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([...todoList, todo])
        console.log(todoList)
        setTodo('')
    }
    return (<div className='todoform'>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={todo} className='todoinput' type="text"
                   placeholder={'Add Todo Item'}/>
            <button className='todobutton' type={"submit"}>Add</button>
        </form>
    </div>)
}