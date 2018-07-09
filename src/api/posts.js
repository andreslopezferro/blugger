import axios from 'axios'

const config = require('../../config')
const isProduction = process.env.NODE_ENV === 'production'
const bloggerApiUrl = isProduction ? config.build.bloggerApiUrl : config.dev.bloggerApiUrl
const blogId = isProduction ? config.build.blogId : config.dev.blogId
const apiKey = isProduction ? config.build.apiKey : config.dev.apiKey

export default {
  getPosts: function () {
    return new Promise(function (resolve, reject) {
      axios.get(bloggerApiUrl + blogId + '/posts?key=' + apiKey)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  getPost: function (id) {
    return new Promise(function (resolve, reject) {
      axios.get(bloggerApiUrl + blogId + '/posts/' + id + '?key=' + apiKey)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
