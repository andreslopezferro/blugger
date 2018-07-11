import Vue from 'vue'
import blog from '../../api/blog'

const namespaced = true

// state
const state = function () {
  return {
    currentBlog: {},
    cookiesStatus: true // Set as acepted.
  }
}

// getters
const getters = {
  currentBlog: function (state) {
    return state.currentBlog
  },
  cookiesStatus: function (state) {
    return state.cookiesStatus
  }
}

// mutations
const mutations = {
  setBlog: function (state, blog) {
    state.currentBlog = blog
  },
  setCookiesStatus: function (state, status) {
    state.cookiesStatus = status
  }
}

// actions
const actions = {
  getBlog: function (context) {
    blog.getBlog().then(function (response) {
      context.commit('setBlog', response.data)
    }, function (error) {
      console.log(error)
    })
  },
  validateCookiesStatus: function (context) {
    var status = Vue.cookie.get('cookiesMessage') || false
    context.commit('setCookiesStatus', status)
  },
  cookieAccepted: function (context) {
    Vue.cookie.set('cookiesMessage', true, {expires: '1Y'})
    context.commit('setCookiesStatus', true)
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
