/* eslint-disable no-unused-vars */
import axios from "axios"


const state = {
    todos: [
        
       
    ]
}

const getters = {

    Todos:(state) => state.todos 
}

const actions = {

    async fetchTodos({commit }){
        const response = await axios.get("http://localhost:3000/todos");
       commit('setTodos',response.data);
    },
    async addTodos({ commit}, title) {
        const response = await axios.post("http://localhost:3000/todos", { title, completed: false });
        commit('newTodos',response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete("http://localhost:3000/todos/"+id)
        
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {

        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`http://localhost:3000/todos?_limit=${limit}` );
         commit("setTodos", response.data)

    },
    async UpdateTodo({ commit }, updTodo ) {

        const response = await axios.put("http://localhost:3000/todos/"+updTodo.id, updTodo)
        commit("updateTod", response.data);

    }

    
};

const mutations = {

    setTodos: (state, Todos) => state.todos = Todos,
    newTodos: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id!== id),
    updateTod: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id == updTodo.id);
        if (index !== -1) {
           state.todos.splice(index,1,updTodo)  
        }
     }
   

    
}
export default {
    state,
    getters,
    actions,
    mutations
 }