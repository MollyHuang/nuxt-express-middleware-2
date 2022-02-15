<template>
  <div>
    <router-link to="/">
      <h1>Hello World Erik</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErikPage',
  asyncData () {
    // eslint-disable-next-line no-console
    console.log('hi')
  }
}
</script>
