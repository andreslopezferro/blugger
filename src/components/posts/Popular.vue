<template>
  <section class="sidebar d-none d-sm-block col-sm-5 col-md-4">
    <div class="row">
      <article class="col-sm-12 bg-light text-left sidebar__spotlight pt-3">
        <h4 class="lead font-weight-bold">Recomendado</h4>
        <ul v-if="posts && posts.length > 0">
          <li class="my-4 text-black-50 font-weight-bold" v-for="post in randomPosts(3)" :key="post.id">
            <h3 class="h6 mb-1"><router-link :to="'/posts' + generateSlug(post)" class="text-dark">{{post.title}}</router-link></h3>
            <small class="d-block mb-0">
              <router-link :to="'/posts' + generateSlug(post)" class="text-dark">{{post.author.displayName}}</router-link>
            </small>
            <small>
              <router-link :to="'/posts' + generateSlug(post)" class="text-muted">{{parseDate(post.published).month}} {{parseDate(post.published).day}}, {{parseDate(post.published).year}} · {{readingTime(post.content).text}}</router-link>
            </small>
          </li>
        </ul>
        <p class="text-muted" v-else>No hay publicaciones aún...</p>
      </article>
      <aside class="col-sm-12 text-left py-2 my-3 sidebar__writers">
        <router-link to="/authors" class="text-muted"><small>Escritores</small></router-link>
      </aside>
    </div>
  </section>
</template>

<script>
import {utils} from '../../mixins/utils'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PopularPosts',
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
    ])
  }
}
</script>
