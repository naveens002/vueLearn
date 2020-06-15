import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        selectedUser: "",
        users: [
            {name: 'Joslyn', id:'1'},
            {name: 'Sebile', id:'2'},
            {name: 'Remi', id:'3'},
            {name: 'Leona', id:'4'}
        ]
    }
});