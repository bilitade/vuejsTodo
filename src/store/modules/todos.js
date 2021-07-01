import axios from "axios"

const state = {
    todos: [
        
       
    ]
}

const getters = {

    Todos:(state) => state.todos 
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    async fetchTodos({commit }){
        const response = await axios.get("http://localhost:3000/todos");
       commit('setTodos',response.data);
    },
    async addTodos({ commit}, title) {
        const response = await axios.post("http://localhost:3000/todos", { title, completed: false });
        commit('newTodos',response.data)
    }
    
};

const mutations = {

    setTodos: (state, Todos) => state.todos = Todos,
    newTodos:(state, todo)=>state.todos.unshift(todo)
}
export default {
    state,
    getters,
    actions,
    mutations
 }