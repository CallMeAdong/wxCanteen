<template>
  <ul v-if="dataList" class="article-wrapper">
    <li v-for="item in dataList" :key="item.id" class="article-item">
      <div class="head">
        <div class="avatar">
          <router-link to="/"><img :src="item.user_avatar" :alt="item.user_name"></router-link>
        </div>
        <div class="name">
          <span>{{ item.user_name }}</span>
          <span><Icon type="calendar"></Icon> {{ item.post_date }}</span>
        </div>
      </div>

      <div class="content" v-on:click="getDetail(item)">
        <div class="text">
          <p><span style="color: #2d8cf0;" v-on:click.stop="getArticleCategory(item.post_type)">#{{ item.post_type }}# </span>{{ item.summary }}</p>
        </div>
        <div class="image">
          <ul class="content-img-wrapper">
            <li v-for="ele in item.content_imgs" :key="ele">
              <img :src="ele">
            </li>
          </ul>
        </div>
      </div>

      <div class="footer">
        <span><Icon type="share"></Icon> 转发</span>
        <span><Icon type="ios-heart-outline"></Icon> {{ item.rate }}</span>
        <span><Icon type="ios-chatboxes-outline"></Icon> {{ item.comment_total }} </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleComponent',
  props: ['data'],
  data () {
    return {
      dataList: this.data
    }
  },
  methods: {
    getDetail: function (data) {
      this.$router.push({path: '/discover/detail', query: {id: data.id}})
    },
    getArticleCategory: function (data) {
      this.$router.push({path: '/discover/samelist/', query: {type: data}})
    }
  }
}
</script>

<style scoped>
ul.article-wrapper {
  list-style: none;
}
ul.article-wrapper li.article-item {
  padding: 10px;
  border-bottom: 4px solid #e9eaec;
}
ul.article-wrapper li.article-item .head .avatar, ul.article-wrapper li.article-item .head .name {
  display: inline-block;
}
ul.article-wrapper li.article-item .head .name {
  vertical-align: top;
  margin-left: 10px;
}
ul.article-wrapper li.article-item .head .avatar a img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
ul.article-wrapper li.article-item .head .name span:first-child {
  font-size: 14px;
  color: #555;
}
ul.article-wrapper li.article-item .head .name span:last-child {
  font-size: 12px;
  color: #80848f;
  display: block;
}

.content .text {
  font-size: 14px;
  padding: 10px 0;
}
ul.content-img-wrapper {
  list-style: none;
  width: 100%;
}
ul.content-img-wrapper li {
  display: inline-block;
  width: 32%;
}
ul.content-img-wrapper li:nth-child(3n-2) {
  margin-right: 2%;
}
ul.content-img-wrapper li:nth-child(3n-3) {
  margin-left: 2%;
}
ul.content-img-wrapper li img {
  width: 100%;
}
.footer {
  padding: 5px 0;
  font-size: 14px;
  text-align: right;
  color: #80848f;
}
.footer span {
  margin-right: 5px;
}
</style>
