import { BASE_API_URL } from '../constans/constans'

export const getTodos = () => {
    return fetch(BASE_API_URL + '?sort=id', {mode: 'cors'})
    .then(response => response.json())
    }

export const deleteTodo = (id) => {
    return fetch(BASE_API_URL + '/' + id, {
    mode: 'cors',
    method: 'DELETE',
    })
}

export const addTodo = (title) => {
    return fetch(BASE_API_URL, {
    mode: 'cors',
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({title}),
    })
}

export const editTodo = (id, title) => {
    return fetch(BASE_API_URL + '/' + id, {
    mode: 'cors',
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({title}),
    })
}