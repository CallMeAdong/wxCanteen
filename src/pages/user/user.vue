<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    if (!localStorage.getItem('isLogin')) {
      this.$router.push({path: '/user/login'})
    } else {
      this.$router.push({path: '/user/info'})
    }
  }
}
</script>

<style>

</style>
