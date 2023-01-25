import React, { useState, useEffect } from "react";
import todos from "./apis";
import "../src/styles/App.css"

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "Lista de tareas pendientes";

/* const list = [
    { title: "test #1", completed: false},
    { title: "test #2"},
    { title: "test #3"}
] */

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [titleSearch, setTitleSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos/new", item);
        setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    const searchTitle = e => setTitleSearch(e.target.value);

    const clickSearch = async () => {
        const { data } = await todos.get(`/todos?title=${titleSearch}`);
        setTodoList(data);
    }

    return (
        <div className="background_image">
            <div className="container_app">
                <div className="ui container center aligned">
                    <Section>
                        <h1 className="tittle">{appTitle}</h1>
                    </Section>

                    <Section>
                        <Form addTodo={addTodo} />
                    </Section>

                    <Section>
                        <List
                            editTodoListProp={editTodo}
                            removeTodoListProp={removeTodo}
                            list={todoList}
                        />
                        <div>
                            <input type="text" onChange={searchTitle} />
                            <button type="button" onClick={clickSearch}>Buscar</button>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};
/* console.log */
export default App;