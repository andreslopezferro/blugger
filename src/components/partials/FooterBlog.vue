<template>
  <footer class="container text-center bg-white py-3">
    <small class="text-muted">{{blog.name}} © {{getYear()}}</small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['blog'],
  methods: {
    getYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
