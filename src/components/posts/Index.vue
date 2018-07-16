<template>
  <section class="col-sm-7 col-md-8 posts">
    <div v-if="loading">
      <vue-content-loading :height="80" v-for="placeholder in [1, 2, 3]" :key="placeholder">
        <rect x="2" y="0" rx="2" ry="2" width="160" height="10" />
        <rect x="2" y="20" rx="2" ry="2" width="200" height="5" />
        <rect x="2" y="30" rx="2" ry="2" width="130" height="5" />
        <rect x="2" y="45" rx="2" ry="2" width="80" height="3" />
        <rect x="2" y="53" rx="2" ry="2" width="55" height="3" />
        <rect x="278" y="0" rx="2" ry="2" width="122" height="70" />
      </vue-content-loading>
    </div>
    <div v-else>
      <template v-if="posts && posts.length > 0">
        <article class="row text-left post mb-5" v-for="(post, index) in posts" :key="post.id" :id="post.id">
          <div class="col-sm-12 col-md-8 post__body">
            <h2 class="lead font-weight-bold"><router-link :to="'/posts' + generateSlug(post)" class="text-dark">{{post.title}}</router-link></h2>
            <router-link :to="'/posts' + generateSlug(post)"><p class="text-muted" v-html="truncatePost(post.content, 140, /,? +/)"></p></router-link>
            <div class="tags mb-1">
              <span class="badge badge-light font-weight-light mr-2 text-capitalize" v-for="label in post.labels">{{label}}</span>
            </div>
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
      <article v-else>
        <p class="text-muted">No hay publicaciones aún...</p>
      </article>
    </div>
  </section>
</template>

<script>
import {utils} from '../../mixins/utils'
import { VueContentLoading } from 'vue-content-loading'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: {VueContentLoading},
  name: 'PostIndex',
  mixins: [utils],
  computed: {
    ...mapGetters('postsModule', {
      posts: 'allPosts',
      months: 'months',
      loading: 'loadingStatus'
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
