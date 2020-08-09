import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {
        setSession(state, id) {
            sessionStorage.setItem('id', id)
        }
    },
    actions: {},
    getters: {},
    modules: {}
})

export default store