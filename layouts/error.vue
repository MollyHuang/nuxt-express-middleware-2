<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page not found 該頁不存在
    </h1>
    <h1 v-else>
      An error occurred 發生錯誤
    </h1>
    <NuxtLink to="/">
      Home page 首頁
    </NuxtLink>
    <router-link to="/">
      <h3>Home 主頁</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'error', // 這裡很重要，寫錯就出不來了
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'], // you can set a custom layout for the error page
  // 下面沒有執行
  asyncData () {
    // eslint-disable-next-line no-console
    console.log('[pages/error.vue][asyncData] error...')
    // throw new Error(':(')
  }
}
</script>
