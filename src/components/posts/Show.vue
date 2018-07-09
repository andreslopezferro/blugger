<template>
  <section class="container mt-5 article">
    <article class="row justify-content-center">
      <author :author="post.author" :post="post" class="col-sm-12 col-md-9 col-lg-8 text-left"></author>
      <div class="col-sm-12 col-md-9 col-lg-8 text-left post" v-html="post.content"></div>
      <div class="col-sm-12 col-md-9 col-lg-8 text-left mt-3">
        <hr>
        <h6 class=" text-body">¿Te gustó lo que acabas de leer?</h6>
        <p class="text-secondary">Comparte esta publicación para que alguien más disfrute también.</p>
      </div>
      <author :author="post.author" class="col-sm-12 col-md-9 col-lg-8 text-left border-top pt-3"></author>
    </article>
  </section>
</template>

<script>
import Author from '../authors/Show'
import {utils} from '../../mixins/utils'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: {Author},
  name: 'PostShow',
  props: ['id', 'slug'],
  mixins: [utils],
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
    ]),
    ...mapMutations('postsModule', [
      'setCover'
    ])
  }
}
</script>
