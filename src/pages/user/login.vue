<template>
  <div id="app">
      <div class="login-wrapper" >
        <div class="background-img" v-bind:style="{height: screenHeight + 'px'}"></div>
        <div class="login-content">
            <div class="input-wrapper">
              <Icon class="input-icon" type="person"></Icon>
              <input class="login-input" name="username" type="text" placeholder="用户名">
            </div>
            <div class="input-wrapper">
              <Icon class="input-icon" type="locked"></Icon>
              <input class="login-input" name="pwd" type="password" placeholder="密   码">
            </div>
            <button class="login-btn" type="submit">登陆</button>
            <div class="info">
              <Row>
                <Col span="12"><router-link to="/user/login">忘记密码？</router-link></Col>
                <Col span="12">还没账号？ <router-link to="/user/login">立即创建</router-link></Col>
              </Row>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenHeight: document.documentElement.clientHeight
    }
  }
}
</script>

<style>
.login-wrapper {
    background:rgba(0, 0, 0, 0.3);
    z-index: 99;
}
.login-wrapper .background-img {
    width: 100%;
    background-image: url('https://up.enterdesk.com/edpic/21/d4/10/21d410ca7e629cc1212fb7780f0f284c.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: -1;
}
.login-wrapper .login-content {
    position: absolute;
    top: 180px;
    z-index: 999;
    width: 100%;
    text-align: center;
}
.login-input {
    background: rgba(0, 0, 0, 0.2);
    width: 70%;
    border: none;
    padding: 15px 10px 15px 40px;
    outline: none;
    border-radius: 6px;
    color: #fff;
    margin-bottom: 20px;
}
.login-btn {
    padding: 10px 70px;
    background: #19be6b;
    border: none;
    border-radius: 20px;
    color: #fff;
    outline: none;
}

.input-icon {
    position: relative;
    left: 30px;
    top: 2px;
    font-size: 18px;
    color: #3e3e3e;
}
.login-content .info {
    margin-top: 25px;
}
.login-content .info a {
    color: #efefef;
}
</style>
