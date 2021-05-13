import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import routes from "./routes";


import 'tailwindcss/tailwind.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faUserCircle,
    faPen,
    faCog,
    faEnvelope,
    faEnvelopeOpen,
    faInbox,
    faFileAlt,
    faFolder,
    faStar,
    faReply,
    faEllipsisH,
    faPaperPlane,
    faShare
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(
    faUserSecret,
    faUserCircle,
    faPen,
    faCog,
    faEnvelope,
    faEnvelopeOpen,
    faInbox,
    faFileAlt,
    faFolder,
    faStar,
    faReply,
    faEllipsisH,
    faPaperPlane,
    faShare
)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueRouter)

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
