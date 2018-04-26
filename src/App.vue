<template>
  <div id="app">
    <div style="margin-bottom: 60px;"><router-view></router-view></div>
    <div class="bottom-menu">
      <div class="menu">
        <div class="menu-item">
          <router-link to="/index">
            <i class="icon-meishi"></i>
            <p>美食</p>
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/recommend">
            <i class="icon-tuijian"></i>
            <p>推荐</p>
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/discover/raiders/">
            <i class="icon-discover"></i>
            <p>发现</p>
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/user">
            <i class="icon-people"></i>
            <p>我的</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/icon/iconfont.css";

.bottom-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  box-shadow: 2px 0 4px rgba(0,0,0,.2);
  background: #fff;
}
.bottom-menu .menu {
  display: flex;
}
.bottom-menu .menu .menu-item {
  flex: 1px;
  font-size: 12px;
}
.bottom-menu .menu .menu-item a {
  color: #495060;
}
.bottom-menu .menu .menu-item a.router-link-active {
  color: #19be6b;
}
</style>
