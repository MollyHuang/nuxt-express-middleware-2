<template>
  <div />
</template>

<script>
// http://localhost/login
export default {
  name: 'LoginPage',
  validate () {
    // return false // this would show error page
    // eslint-disable-next-line no-undef
    return error({ statusCode: 500, message: 'Post not found' })
  }
}
</script>
