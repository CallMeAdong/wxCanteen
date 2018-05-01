<template>
  <div class="top-nav">
      <span v-on:click="gotoBack"><Icon type="chevron-left"></Icon></span>
      <span v-if="nav_title">{{ nav_title }}</span>
  </div>
</template>

<script>
export default {
  name: 'back-nav',
  props: ['title'],
  data () {
    return {
      nav_title: this.title
    }
  },
  methods: {
    gotoBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.top-nav {
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    font-size: 14px;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 2px rgba(0,0,0,.2);
}
.top-nav span:last-child {
    margin-left: 15px;
}
</style>
