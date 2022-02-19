<template>
  <div>
    <router-link to="/">
      <h1>Hello World Erik</h1>
    </router-link>
    <h2>{{ blah }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ErikPage',
  middleware: 'erik',
  loading: true,
  // loading: {
  //   continuous: true,
  //   color: 'purple',
  //   height: '5px'
  // },
  asyncData (context) {
    if (process.server) { // only shown on server side
      // eslint-disable-next-line no-console
      console.log('[asyncData] hi...')
    }
    return { blah: 'hi ' }
  },
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-console
      // console.log('[mounted] loading...')
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-console
        // console.log('[mounted] loaded')
      }, 500)
    })
  }
}
</script>
