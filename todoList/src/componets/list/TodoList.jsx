import TodoItem from "./TodoItem"

export default function TodoList({ todos, setTodos }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} id={todo.id} />
            ))}
</div>
    )
}