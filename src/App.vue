<template>
  <div id="app">
    <navbar :blog="blog"></navbar>
    <router-view/>
    <footer-blog :blog="blog"></footer-blog>
    <cookies :class="{'active': !cookiesStatus}"></cookies>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar'
import FooterBlog from './components/partials/FooterBlog'
import Cookies from './components/partials/Cookies'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {Navbar, FooterBlog, Cookies},
  name: 'App',
  computed: {
    ...mapGetters('blogModule', {
      cookiesStatus: 'cookiesStatus',
      blog: 'currentBlog'
    })
  },
  beforeMount: function () {
    this.getBlog()
  },
  mounted: function () {
    var vm = this
    setTimeout(function () {
      vm.validateCookiesStatus()
    }, 3000)
  },
  methods: {
    ...mapActions('blogModule', [
      'getBlog',
      'validateCookiesStatus'
    ])
  }
}
</script>
