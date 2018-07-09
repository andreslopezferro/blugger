<template>
  <section class="col-sm-7 col-md-8 posts">
    <template v-if="posts && posts.length > 0">
      <article class="row text-left post mb-5" v-for="(post, index) in posts" :key="post.id" :id="post.id">
        <div class="col-sm-12 col-md-8 post__body">
          <h2 class="lead font-weight-bold"><router-link :to="'/posts' + generateSlug(post)" class="text-dark">{{post.title}}</router-link></h2>
          <router-link :to="'/posts' + generateSlug(post)"><p class="text-muted" v-html="truncatePost(post.content, 140, /,? +/)"></p></router-link>
          <small class="d-block mb-0"><router-link :to="'/posts' + generateSlug(post)" class="text-dark">{{post.author.displayName}}</router-link></small>
          <small><router-link :to="'/posts' + generateSlug(post)" class="text-muted">{{parseDate(post.published).month}} {{parseDate(post.published).day}}, {{parseDate(post.published).year}} · {{readingTime(post.content).text}}</router-link></small>
        </div>
        <aside class="col-md-4 post__image d-none d-md-block" :class="{'post__image--loader': findImage(post, index)}">
          <router-link :to="'/posts' + generateSlug(post)">
            <div class="col-sm-12" v-if="post.imageUrl" :style="{backgroundImage: 'url(' + post.imageUrl + ')', }"></div>
          </router-link>
        </aside>
      </article>
    </template>
    <template v-else>
      <article>
        <p class="text-muted">No hay publicaciones aún...</p>
      </article>
    </template>
  </section>
</template>

<script>
import {utils} from '../../mixins/utils'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'PostIndex',
  mixins: [utils],
  computed: {
    ...mapGetters('postsModule', {
      posts: 'allPosts',
      months: 'months'
    })
  },
  created: function () {
    this.getPosts()
  },
  methods: {
    ...mapActions('postsModule', [
      'getPosts'
    ]),
    ...mapMutations('postsModule', [
      'setCover'
    ])
  }
}
</script>
