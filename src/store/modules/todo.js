import { BASE_API_URL } from '../../constans/constans'

export default {
    actions: {
        getTodos({ commit }){
            commit('changeLoading', true)
            fetch(BASE_API_URL + '?sort=id', {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                commit('changeLoading', false)
                commit('updateTodos', data)
            })
        },
        createTodo({ dispatch }, data){
            fetch(BASE_API_URL, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(() => {dispatch('getTodos')})
        },
        deleteTodo({ dispatch }, id){
            fetch(BASE_API_URL + '/' + id, {
                mode: 'cors',
                method: 'DELETE',
            })
            .then(() => {dispatch('getTodos')})
        },
        editTodo({ dispatch }, { id, data}){
            fetch(BASE_API_URL + '/' + id, {
                mode: 'cors',
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(() => {dispatch('getTodos')})
        }
    },
    mutations: {
        updateTodos(state, data){
            state.todos = data
        },
        changeLoading(state, data){
            state.loading = data
        }
    },
    state: {
        todos: [],
        loading: true
    },
    getters: {
        allTodos(state){
            return state.todos
        },
        loading(state){
            return state.loading
        }
    },
}