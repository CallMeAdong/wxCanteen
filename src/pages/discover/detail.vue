<template>
  <div v-if="articleData">
      <div class="top-bar">
        <span v-on:click="goBack"><Icon type="chevron-left"></Icon></span>
        <span><Icon type="android-share-alt"></Icon></span>
      </div>
      <div class="article-content">
        <div class="head">
          <div class="avatar">
            <router-link to="/"><img :src="articleData.user_avatar" :alt="articleData.user_name"></router-link>
          </div>
          <div class="name">
            <span>{{ articleData.user_name }}</span>
            <span>{{ articleData.post_date }}</span>
          </div>
        </div>
        <div class="body-content">
          <p>{{ articleData.content }}</p>
          <div class="footer">
            <span><Icon type="share"></Icon> 转发</span>
            <span><Icon type="ios-heart-outline"></Icon> {{ articleData.rate }}</span>
            <span><Icon type="ios-chatboxes-outline"></Icon> {{ articleData.comment_total }} </span>
          </div>
        </div>
      </div>

      <div class="comment-wrapper">
        <div class="split">回复({{ articleData.comment_total }})</div>
        <div style="padding: 3px 10px; color: #80848f; background: #e9eaec;">最近回复</div>
        <div class="content">
          <comment-list :pcomments="articleData.comment" v-if="articleData"></comment-list>
        </div>
      </div>
  </div>
</template>

<script>
import axios from '../../api/axios'
import CommentList from '../../components/comment-list'

export default {
  components: {
    CommentList: CommentList
  },
  data () {
    return {
      articleID: null,
      articleData: null
    }
  },
  created () {
    this.articleID = this.$route.query.id// 获取参数文章ID
    this.getDetailData()
  },
  methods: {
    getDetailData: function () {
      axios.get('/discover/article/detail').then((res) => {
        this.articleData = res.data.result
      })
    },
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
/* 顶部导航 */
.top-bar {
  padding: 10px 20px;
  height: 40px;
  border-bottom: 1px solid #e9eaec;
  font-size: 16px;
  position: fixed;
  background: #fff;
  width: 100%;
}
.top-bar span:last-child {
  float: right;
}

/* 文章作者 */
.article-content {
  padding: 50px 10px 10px 10px;
}
.article-content .head .avatar {
  display: inline-block;
}
.article-content .head .avatar  a img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.article-content .name {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  font-size: 14px;
}
.article-content .name span:last-child {
  display: block;
  font-size: 12px;
  color: #80848f;
}
.article-content .body-content p:first-child {
  font-size: 14px;
  padding: 10px 0;
}
.article-content .body-content .footer {
  text-align: right;
}
.article-content .body-content .footer span {
  margin-right: 5px;
}

/* 回复 */
.comment-wrapper .split {
  font-size: 14px;
  padding: 5px 10px;
  border-top: 4px solid #e9eaec;
}
.comment-wrapper .content {
  padding: 10px;
}
</style>
