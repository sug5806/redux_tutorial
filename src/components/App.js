import React from 'react'
import Footer from './Footer'
import AddTodo from "../containers/AppTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App