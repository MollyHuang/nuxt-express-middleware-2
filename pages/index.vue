<template>
  <!-- <Tutorial /> -->
  <div>
    <h1>Simple Middleware Example</h1>
    <router-link to="/erik">
      Press me to Erik
    </router-link>
    <div>{{ response }}</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  loading: true,
  async asyncData (context) {
    const response = await fetch('http://127.0.0.1:3000/api').then(res => res.text())
    return { response }
  }
}
</script>
