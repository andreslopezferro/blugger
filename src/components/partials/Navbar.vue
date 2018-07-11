<template>
  <div class="bg-white sticky-top">
    <header class="container text-center">
      <h4 class="h2 font-weight-bold mb-0"><router-link to="/" class="text-dark">Blog</router-link></h4>
      <small class="text-muted">{{blog.name}}</small>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['blog']
}
</script>
