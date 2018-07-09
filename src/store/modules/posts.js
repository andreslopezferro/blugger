import posts from '../../api/posts'

const namespaced = true

// state
const state = function () {
  return {
    posts: [],
    currentPost: {},
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
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
  }
}

// actions
const actions = {
  getPosts: function (context) {
    posts.getPosts().then(function (response) {
      context.commit('setPosts', response.data.items)
    }, function (error) {
      console.log(error)
    })
  },
  getPost: function (context, payload) {
    posts.getPost(payload.id).then(function (response) {
      context.commit('setPost', response.data)
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
