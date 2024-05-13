import ToDo from "../ToDoItem";

export default function ToDoList({todos, toggleTodo}) {
    return (
        <div className='todo-list-wrapper'>
            {todos.map(todo => (
                <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </div>
    );
}
