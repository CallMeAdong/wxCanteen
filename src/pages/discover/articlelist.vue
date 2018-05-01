<template>
  <article-component v-if="raidersList" :data="raidersList"></article-component>
</template>

<script>
import axios from '../../api/axios'
import ArticleComponent from '../../components/arti'
export default {
  components: {
    ArticleComponent: ArticleComponent
  },
  data () {
    return {
      raidersList: null
    }
  },
  created () {
    this.getRaidersList()
  },
  methods: {
    getRaidersList: function () {
      axios.get('/discover/article/list').then((res) => {
        this.raidersList = res.data.result
      })
    }
  }
}
</script>

<style>

</style>
