import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        _id: 'efew55',
        title: "Todo 1",
        isCompleted: false
    },
    {
        _id: 'efew555',
        title: "Todo 2",
        isCompleted: false
    },
    {
        _id: 'efew5555',
        title: "Todo 3",
        isCompleted: false
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => 
        setTodos(todos.filter(todo => todo._id !== id))

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-center mg">Todo app</h1>
            {todos.map(todo => (
                <TodoItem 
                    key={todo._id} 
                    todo={todo} 
                    changeTodo = {changeTodo}
                    removeTodo = {removeTodo} 
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home;