import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const urlAPI = 'https://jsonplaceholder.typicode.com/'
export default new Vuex.Store({
    state: {
        posts: [],
        comments: [],
        albums: [],
        photos: [],
        todos: [],
        photoID: [],
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
            if (new Date(task.date) < new Date()) {
                task.status = 'outdated'
            }
            return task
        }),
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks)) // tasks это ключ по которому мы будем обращаться в локалсторэдж
        },
        updateTask(state, {id, description, date}) {

            const tasks = state.tasks.concat();

            const idx = tasks.findIndex(t => t.id === id);
            const task = tasks[idx];

            const status = new Date(date) > new Date() ? 'active' : 'outdated';
            tasks[idx] = {...task, date, description, status} //Разкрываем такс и обновляем дату и описание

            state.tasks = tasks;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        completeTask(state, id) {
            const idx = state.tasks.findIndex(t => t.id === id)
            state.tasks[idx].status = 'completed'
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },

        getPosts(state, data) {
            state.posts = data
        },
        getComments(state, data) {
            state.comments = data
        },
        getAlbums(state, data) {
            state.albums = data
        },
        getPhotos(state, data) {
            state.photos = data
        },
        getPhotoById(state, data) {
            state.photoID = data
        }
    },
    actions: {  // Методы которые мы вызываем во вю
        createTask({commit}, task) { // Что за метод комит ?!
            commit('createTask', task)
        },
        updateTask({commit}, task) {
            commit('updateTask', task)
        },
        completeTask({commit}, id) {
            commit('completeTask', id)
        },
        getPosts({commit}) {
            Vue.axios.get(`${urlAPI}posts`).then((response) => {

                commit('getPosts', response.data)
                return response
            })

        },
        getComments({commit}) {
            Vue.axios.get(`${urlAPI}comments`).then((response) => {

                commit('getComments', response.data)
                return response
            })
        },
        getAlbums({commit}) {
            Vue.axios.get(`${urlAPI}albums`).then((response) => {

                commit('getAlbums', response.data)
                return response
            })
        },
        getPhotos ({commit}) {
            Vue.axios.get(`${urlAPI}photos`).then((response) => {

                commit('getPhotos', response.data)
                return response
            })
        },
        async getPhotoById ({commit}, photoID) {
            const response = await axios.get(`${urlAPI}photos/${photoID}`)
            commit('getPhotos', response.data)
            return response.data
    },
},
    modules: {},
    getters: {
        tasks: s => s.tasks,
        taskById: s => id => s.tasks.find(t => t.id === id),
        statePosts: state => state.posts,
        comments: state => state.comments,
        albums: state => state.albums,
        photos: state => state.photos,

    }
})
