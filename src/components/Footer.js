import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'

const Footer = () => (
    <p>
        Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
)

export default Footer


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

