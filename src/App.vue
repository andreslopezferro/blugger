<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footer-blog></footer-blog>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar'
import FooterBlog from './components/partials/FooterBlog'
export default {
  components: {Navbar, FooterBlog},
  name: 'App'
}
</script>
