import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import postsModule from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postsModule
  }
})
