<template>
  <section class="container mt-5 article">
    <article class="row justify-content-center">
      <div class="col-sm-12 col-md-9 col-lg-8 text-left" v-if="loading">
        <vue-content-loading style="max-width: 250px;" class="d-block">
          <circle cx="30" cy="30" r="30" width="35"/>
          <rect x="80" y="13" rx="4" ry="4" width="150" height="15" />
          <rect x="80" y="37" rx="4" ry="4" width="90" height="10" />
        </vue-content-loading>
        <vue-content-loading height="230">
          <rect x="0" y="0" rx="2" ry="2" width="80%" height="5" />
          <rect x="0" y="12" rx="2" ry="2" width="90%" height="5" />
          <rect x="0" y="24" rx="2" ry="2" width="70%" height="5" />
          <rect x="0" y="36" rx="2" ry="2" width="50%" height="5" />
        </vue-content-loading>
      </div>
      <template v-else>
        <template v-if="post && post != {}">
          <author :author="post.author" :post="post" class="col-sm-12 col-md-9 col-lg-8 text-left"></author>
          <div class="col-sm-12 col-md-9 col-lg-8 text-body post mb-4 text-left" v-html="post.content"></div>
          <author :author="post.author" class="col-sm-12 col-md-9 col-lg-8 border-top pt-3 text-left"></author>
        </template>
        <template v-else>
          <div class="col-sm-12 col-md-9 col-lg-8 text-center">
            <h6 class="h1 text-black-50">404</h6>
            <h6 class="display-4">Uuups.</h6>
            <p class="lead">No hemos encontrado el articulo que buscas...</p>
            <router-link to="/" class="d-inline-block text-body mb-5">Volver al inicio</router-link>
          </div>
        </template>
      </template>
    </article>
  </section>
</template>

<script>
import Author from '../authors/Show'
import PopularPosts from './Popular'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { VueContentLoading } from 'vue-content-loading'
export default {
  components: {Author, PopularPosts, VueContentLoading},
  name: 'PostShow',
  props: ['id', 'slug'],
  computed: {
    ...mapGetters('postsModule', {
      post: 'currentPost',
      loading: 'loadingStatus'
    })
  },
  created: function () {
    this.getPost({id: this.id})
  },
  beforeDestroy: function () {
    this.setPost({})
  },
  methods: {
    ...mapActions('postsModule', [
      'getPost'
    ]),
    ...mapMutations('postsModule', [
      'setPost'
    ])
  }
}
</script>
