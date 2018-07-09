<template>
  <section class="author">
    <article class="clearfix mb-4" v-if="author">
      <img :src="author.image.url" alt="Author" class="rounded-circle d-inline-block float-left mr-3">
      <h5 class="mb-0 text-secondary">{{author.displayName}}</h5>
      <div v-if="post">
        <small class="text-black-50">{{parseDate(post.published).month}} {{parseDate(post.published).day}}, {{parseDate(post.published).year}} · {{readingTime(post.content).text}}</small>
      </div>
      <div v-else>
        <small class="text-black-50">Autor</small>
      </div>
    </article>
  </section>
</template>

<script>
import {utils} from '../../mixins/utils'
import { mapGetters } from 'vuex'
export default {
  name: 'AuthorShow',
  props: ['author', 'post'],
  mixins: [utils],
  computed: {
    ...mapGetters('postsModule', {
      months: 'months'
    })
  }
}
</script>
