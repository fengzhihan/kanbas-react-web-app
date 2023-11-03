import JavaScript from "./JavaScript";
// import PathParameters from "./PathParameters";
import Styles from "./Styles";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";


function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div>
            <h1>Assignment 3</h1>
            {/* <TodoList/>
            <TodoItem/> */}

            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>

            <ConditionalOutput />
            <Styles />
            <Classes />
            {/* <PathParameters /> */}
            <JavaScript />
        </div>
    );
}
export default Assignment3;