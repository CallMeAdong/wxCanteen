<template>
  <article-component v-if="articleData" :data="articleData"></article-component>
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
      articleData: null
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    getArticleList: function () {
      var articleType = this.$route.query.type
      console.log(articleType)
      axios.get('/discover/article/samelist/').then((res) => {
        this.articleData = res.data.result
      })
    }
  }
}
</script>

<style>

</style>
