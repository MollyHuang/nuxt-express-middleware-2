<template>
  <!-- <Tutorial /> -->
  <div>
    <h1>Simple Middleware Example</h1>
    <hr>
    <router-link to="/erik">
      Press me to Erik
    </router-link>
    <div>{{ response }}</div>
    <NuxtLink to="/login">
      Login Page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  loading: true,
  async asyncData (context) {
    // eslint-disable-next-line no-console
    console.log('[pages/index.vue] context.env.baseUrl=', context.env.baseUrl)
    const response = await fetch(context.env.baseUrl + '/api').then(res => res.text())
    return { response }
  }
}
</script>
