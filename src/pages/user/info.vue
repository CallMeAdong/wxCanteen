<template>
  <div id="app">
      <div class="top-wrapper">
          <div class="user-info">
              <div class="avatar"><Avatar :src="userInfoData.avatar"></Avatar></div>
              <div class="name">{{ userInfoData.name }}</div>
              <div class="more-info">
                  <span>
                      <Icon type="male" v-if="userInfoData.sex == 0"></Icon>
                      <Icon type="female" v-else></Icon>
                  </span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>
                    <span v-if="userInfoData.identfic"><Icon type="ios-checkmark" style="color: yellow;"></Icon> 已认证</span>
                    <span v-else><Icon type="ios-close" style="color: red;"></Icon> 未认证</span>
                  </span>
              </div>
          </div>
      </div>
      <div class="content">
        <div class="item">
          <router-link to="/user/orders">
            <div class="title">我的订单</div>
            <div class="item-icon"><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
        <div class="split"></div>
        <div class="item">
          <router-link to="/">
            <div class="title">个人信息</div>
            <div class="item-icon"><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/">
            <div class="title">学号绑定</div>
            <div class="item-icon"><span>{{ userInfoData.stu_num }}</span><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/">
            <div class="title">登陆密码</div>
            <div class="item-icon"><span>修改 </span><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
        <div class="split"></div>
        <div class="item">
          <router-link to="/">
            <div class="title">我要送餐</div>
            <div class="item-icon"><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
        <div class="split"></div>
        <div class="item">
          <router-link to="/">
            <div class="title">关于我们</div>
            <div class="item-icon"><Icon type="chevron-right"></Icon></div>
          </router-link>
        </div>
      </div>

      <div class="logout">
          <button class="logout-btn" v-on:click="logout">退出登陆</button>
      </div>
  </div>
</template>

<script>
import axios from '../../api/axios'
export default {
  data () {
    return {
      userInfoData: {}
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo: function () {
      axios.get('/user/info/').then((res) => {
        this.userInfoData = res.data.result
      })
    },
    logout: function () {
      // 发送退出请求
      localStorage.setItem('isLogin', '')
      this.$Message.success('退出成功')
      this.$router.push({path: '/user/login'})
    }
  }
}
</script>

<style>
.top-wrapper {
    width: 100%;
    height: 250px;
    background: #19be6b;
    padding-top: 20%;
}

.top-wrapper .user-info {
    width: 50%;
    margin: 0 auto;
    text-align: center;
}
.user-info .avatar span {
    width: 80px;
    height: 80px;
    border-radius: 40px;
}
.user-info .name {
    color: #fff;
    font-size: 16px;
    padding: 5px;
}
.ivu-icon.ivu-icon-female {
    color: pink;
}
.ivu-icon.ivu-icon-male {
    color: blue;
}

.content .item {
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #efefef;
}

.content .item:hover {
    background: #efefef;
}

.content .item a {
    display: flex;
    color: #555;
}
.content .item a .title{
    flex: 1;
}

.content .item a .item-icon span {
    font-size: 12px;
    color: #bbbec4;
    padding-right: 5px;
}
.content .split {
    width: 100%;
    height: 8px;
    background: #e9eaec;
}
.logout {
    text-align: center;
    margin-top: 20px;
}
.logout button {
    width: 80%;
    padding: 10px 0;
    background: #19be6b;
    color: #fff;
    border: none;
    outline-style: none;
}
</style>
