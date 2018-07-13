import posts from '../../api/posts'

const namespaced = true

// state
const state = function () {
  return {
    posts: [],
    currentPost: {},
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    loading: true
  }
}

// getters
const getters = {
  allPosts: function (state) {
    return state.posts
  },
  currentPost: function (state) {
    return state.currentPost
  },
  months: function (state) {
    return state.months
  },
  loadingStatus: function (state) {
    return state.loading
  }
}

// mutations
const mutations = {
  setPosts: function (state, posts) {
    state.posts = posts
  },
  setPost: function (state, post) {
    state.currentPost = post
  },
  setCover: function (state, payload) {
    state.posts[payload.index].imageUrl = payload.url ? payload.url[1] : ''
  },
  setLoading: function (state, status) {
    state.loading = status
  }
}

// actions
const actions = {
  getPosts: function (context) {
    context.commit('setLoading', true)
    posts.getPosts().then(function (response) {
      context.commit('setPosts', response.data.items)
      context.commit('setLoading', false)
    }, function (error) {
      console.log(error)
    })
  },
  getPost: function (context, payload) {
    context.commit('setLoading', true)
    posts.getPost(payload.id).then(function (response) {
      context.commit('setPost', response.data)
      context.commit('setLoading', false)
    }, function (error) {
      console.log(error)
    })
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
