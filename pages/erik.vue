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
  loading: true,
  // loading: {
  //   continuous: true,
  //   color: 'purple',
  //   height: '5px'
  // },
  asyncData () {
    // eslint-disable-next-line no-console
    console.log('[asyncData] hi...')
  },
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-console
      console.log('[mounted] loading...')
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-console
        console.log('[mounted] loaded')
      }, 500)
    })
  }
}
</script>
