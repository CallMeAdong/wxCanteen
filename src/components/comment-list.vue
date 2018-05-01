<template>
  <ul v-if="comments">
    <li v-for="item in comments" :key="item.id">
      <div class="head">
        <div class="avatar">
          <router-link to="/"><img :src="item.from_user.avatar" :alt="item.from_user.name"></router-link>
        </div>
        <div class="name">
          <span>{{ item.from_user.name }}</span>
        </div>
      </div>
      <div class="content">
        <p class="comment">{{ item.content }}</p>
        <div class="origin" v-if="item.to_uid != 0">
          <p><router-link to="/">@{{ item.to_content.user_info.name }}</router-link> {{ item.to_content.content }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'comment-list',
  props: ['pcomments'],
  data () {
    return {
      comments: this.pcomments
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
ul .head .avatar {
  display: inline-block;
}
ul .head .name {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  margin-left: 5px;
  padding-top: 12px;
}
ul .head .avatar a img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

ul .content {
  margin-left: 45px;
  padding: 5px 0 10px 0;
  border-bottom: 1px solid #e9eaec;
}
ul .content p.comment{
  padding-bottom: 10px;
}
ul .content .origin {
  padding: 10px;
  background: #f8f8f9;
}
</style>
