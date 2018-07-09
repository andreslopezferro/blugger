<template>
  <div class="container mt-5">
    <div class="row">
      <posts></posts>
      <popular-posts></popular-posts>
    </div>
  </div>
</template>

<script>
import Posts from './posts/Index'
import PopularPosts from './posts/Popular'
export default {
  components: {Posts, PopularPosts},
  name: 'Home'
}
</script>
