<template>
  <div id="app">
    <div class="head-img">
      <img src="https://fuss10.elemecdn.com/a/5c/c19ebf245df0e585f8e7f983c5f68gif.gif" alt="">
    </div>
    <div>
      <div class="split-wrapper">
        <span><Icon type="clock" style="color: #19be6b"></Icon>&nbsp;&nbsp;预约美食</span>
        <div class="sub-title">期待与您的一场邂逅</div>
      </div>
      <div class="content-reservation">
        <ul>
          <li class="item" v-for="item in foodList" :key="item.id">
            <div class="item-img">
              <img :src="item.image" :alt="item.title">
              <span>{{ item.sale_count }} 人已预约</span>
            </div>
            <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="price-reservation">
                <span class="price"><Icon type="social-yen"></Icon> {{ item.price }}</span>
                <button class="reservation" :data-id="item.id" v-on:click="clickStall">点击预约</button>
              </div>
              <div class="stall"><span><Icon type="ios-box-outline"></Icon> {{ item.stall }}</span></div>
            </div>
          </li>
        </ul>
        <div class="more">
          <button>查看更多 <Icon type="chevron-right"></Icon></button>
        </div>
      </div>
    </div>
    <div style="border-top: 5px solid #efefef;">
      <div class="split-wrapper">
        <span><Icon type="paper-airplane" style="color: pink;"></Icon> 推荐口味</span>
        <div class="sub-title">贴心的量身打造</div>
      </div>
      <div class="content-recommend">
        <ul>
          <li class="item" v-for="item in foodList" :key="item.id">
            <div class="left">
              <router-link to="/"><img :src="item.image" :alt="item.title"></router-link>
            </div>
            <div class="right">
              <router-link to="/">
                <div class="title"><span>{{ item.title }}</span></div>
                <div class="info">
                  <span>[{{ item.area }}] {{ item.desc }}</span>
                </div>
                <div class="other-info">
                  <span class="price">{{ item.price }}</span> 元
                  <span class="sale-count">已售 {{ item.sale_count }} 份</span>
                </div>
              </router-link>
            </div>
          </li>
        </ul>
          <div class="more">
            <button>点击加载更多 <Icon type="arrow-down-c"></Icon></button>
          </div>
      </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import axios from '../../api/axios'
export default {
  data () {
    return {
      foodList: []
    }
  },
  created () {
    this.getIndexFoodList()
  },
  methods: {
    getIndexFoodList: function () {
      axios.get('/index/foodlist/').then((res) => {
        this.foodList = res.data.result
      })
    },
    clickStall: function (event) {
      // 给后台发送预约请求
      var id = event.target.getAttribute('data-id')
      this.$Message.success('id为: ' + id + '预约成功')
    }
  }
}
</script>

<style>
.head-img {
  width: 100%;
}
.head-img img {
  width: 100%;
}
.split-wrapper {
  width: 100%;
  text-align: center;
}
.split-wrapper span {
  font-size: 16px;
  color: #212121;
  position: relative;
}
.split-wrapper span:before, .split-wrapper span:after {
  content: '';
  position: absolute;
  top: 52%;
  background: #494949;
  width: 60px;
  height: 2px;
}
.split-wrapper span:before {
  left: -70px;
}
.split-wrapper span:after {
  right: -70px;
}
.split-wrapper .sub-title {
  font-size: 12px;
  color: #80848f;
}

.content-reservation {
  padding: 10px;
}
.content-reservation ul {
  list-style: none;
}
.content-reservation ul li.item {
  display: inline-block;
  width: 48%;
  margin-bottom: 10px;
}
.content-reservation ul li.item:nth-child(2n-1) {
  margin-right: 4%;
}
.content-reservation ul li.item .item-img img{
  width: 100%;
}
.content-reservation ul li.item .item-img {
  position: relative;
}
.content-reservation ul li.item .item-img span {
  position: absolute;
  width: 100%;
  bottom: 5px;
  right: 0;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.content-reservation .item .info .title {
  font-size: 14px;
  font-weight: bold;
}
.content-reservation .item .info .price-reservation .price{
  color: #19be6b;
  font-size: 14px;
}
.content-reservation .item .info .price-reservation .reservation {
  background: #19be6b;
  color: #fff;
  border: none;
  padding: 3px 5px;
  float: right;
  outline-style: none;
}

.content-reservation .item .info .stall {
  margin-top: 20px;
  padding: 5px 0;
  border-top: 1px dashed #e9eaec;
  font-size: 12px;
  color: #80848f;
}

.content-reservation .more, .content-recommend .more {
  text-align: center;
}
.content-reservation .more button, .content-recommend .more button {
  border: none;
  padding: 5px 40px;
  background: #19be6b;
  color: #fff;
  border-radius: 5px;
  outline-style: none;
}

.content-recommend {
  padding: 0 10px;
}
.content-recommend ul {
  list-style: none;
  margin-top: 15px;
}
.content-recommend ul li.item {
  margin-bottom: 15px;
  display: flex;
}
.content-recommend .left {
  flex: 1;
}
.content-recommend .right {
  flex: 2;
  padding-left: 10px;
  position: relative;
}
.content-recommend .left a img {
  width: 100%;
}
.content-recommend .right a {
  color: #555;
}
.content-recommend .right:hover {
  background: #efefef;
}
.content-recommend .right a .title {
  font-size: 16px;
}
.content-recommend .right a .info {
  overflow-x: hidden;
}
.content-recommend .right a .other-info {
  position: absolute;
  bottom: 5px;
}
</style>
