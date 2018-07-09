<template>
  <section class="container mt-5 article">
    <template v-if="post">
      <article class="row justify-content-center">
        <author :author="post.author" :post="post" class="col-sm-12 col-md-9 col-lg-8 text-left"></author>
        <div class="col-sm-12 col-md-9 col-lg-8 text-left post mb-4" v-html="post.content"></div>
        <author :author="post.author" class="col-sm-12 col-md-9 col-lg-8 text-left border-top pt-3"></author>
      </article>
    </template>
    <template v-else>
      <h6 class="h1 text-black-50">404</h6>
      <h6 class="display-4">Uuups.</h6>
      <p class="lead">No hemos encontrado el articulo que buscas...</p>
      <router-link to="/" class="d-inline-block text-body mb-5">Volver al inicio</router-link>
    </template>
  </section>
</template>

<script>
import Author from '../authors/Show'
import PopularPosts from './Popular'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {Author, PopularPosts},
  name: 'PostShow',
  props: ['id', 'slug'],
  computed: {
    ...mapGetters('postsModule', {
      post: 'currentPost'
    })
  },
  created: function () {
    this.getPost({id: this.id})
  },
  methods: {
    ...mapActions('postsModule', [
      'getPost'
    ])
  }
}
</script>
