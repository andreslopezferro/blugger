<template>
  <footer class="container text-center bg-white py-3">
    <small class="text-muted">{{blog.name}} © {{getYear()}}</small>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters('blogModule', {
      blog: 'currentBlog'
    })
  },
  created: function () {
    this.getBlog()
  },
  methods: {
    ...mapActions('blogModule', [
      'getBlog'
    ]),
    getYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
