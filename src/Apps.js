import React, { useState } from 'react';
import Todos from "./Todos";
import Header from "./Header";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { Route, BrowserRouter as Routers } from "react-router-dom";
import About from "./About";
import "./App.css";
import PropTypes from 'prop-types';

export default function Apps(props) {
    const Todo = [

        {
            id: uuidv4(),
            item: "having breakfast",
            completed: false,
        },
        {
            id: uuidv4(),
            item: "having meal",
            completed: true,
        },
        {
            id: uuidv4(),
            item: "going to bed",
            completed: false,
        },
    ]
    const [todos, setTodos] = useState(Todo)

    const complete = (id) => {
        setTodos({
            todos: todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    const handleDelete = (id) => {
        setTodos({


            todos: [...todos.filter((todo) => todo.id !== id)],
        });
    };
    const addTodos = (text) => {
        const newtodo = { id: uuidv4(), item: text, completed: false };
        setTodos(
            [...todos,

                newtodo
            ],
        )
    }
    console.log(todos)

    return (
        <Routers>
            <div className="container">
                <Header />
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <React.Fragment>
                            <Input addtodo={addTodos} />
                            <Todos
                                data={todos}
                                complete={complete}
                                deleted={handleDelete}
                            />
                        </React.Fragment>
                    )}
                />
                <Route path="/about" component={About} />
            </div>
        </Routers>
    );
}

Apps.propTypes = {
    todos: PropTypes.array.isRequired
};