<template>
  <div class="container mt-5">
    <div class="row">
      <posts></posts>
      <section class="sidebar d-none d-sm-block col-sm-5 col-md-4">
        <div class="row">
          <article class="col-sm-12 bg-light text-left sidebar__spotlight pt-3">
            <h4 class="lead font-weight-bold">Lo más visto</h4>
            <ul>
              <li class="my-4">
                <h3 class="h6 mb-1">Vue.js: the good, the meh, and the ugly</h3>
                <small>Andrés Felipe López Ferro</small>
                <small class="d-block text-muted">Julio 1, 2018 · 4 min read</small>
              </li>
              <li class="my-4">
                <h3 class="h6 mb-1">Say Hello to Our Disappointing Robot Future</h3>
                <small>Andrés Felipe López Ferro</small>
                <small class="d-block text-muted">Julio 3, 2018 · 4 min read</small>
              </li>
              <li class="my-4">
                <h3 class="h6 mb-1">Hollywood's Weird "Twin Film" Habit</h3>
                <small>Andrés Felipe López Ferro</small>
                <small class="d-block text-muted">Julio 2, 2018 · 4 min read</small>
              </li>
            </ul>
          </article>
          <aside class="col-sm-12 text-left py-2 my-3 sidebar__writers">
            <router-link to="/authors" class="text-muted"><small>Escritores</small></router-link>
          </aside>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Posts from './posts/Index'
export default {
  components: {Posts},
  name: 'Home'
}
</script>
