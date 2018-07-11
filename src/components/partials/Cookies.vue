<template>
  <div class="cookie-bar">
    <span class="text-light">Usamos <router-link to="/cookies" class="text-light">cookies</router-link>.</span>
    <button class="cookie-bar--close-button text-light" @click="cookieAccepted()">
      <font-awesome-icon icon="times" />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Cookies',
  methods: {
    ...mapActions('blogModule', [
      'cookieAccepted'
    ])
  }
}
</script>
