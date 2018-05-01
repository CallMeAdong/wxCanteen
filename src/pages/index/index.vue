<template>
  <div id="app">
    <div class="top-menu">
      <div class="school">
        <Select>
          <Option v-for="item in schoolList" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </div>
      <div class="search">
        <Icon type="search" />
        <input type="text" placeholder="搜索美食">
      </div>
    </div>
    <Carousel autoplay loop>
      <CarouselItem v-for="item in carouselData" :key="item.id">
        <router-link to="/index">
          <img class="carousel-img" :src="item.image" alt="">
        </router-link>
      </CarouselItem>
    </Carousel>

    <div class="slide-menu">
      <ul>
        <li :class="{'active': showId === 1}" data-id="1" v-on:click="changeSelectId">全部</li>
        <li :class="{'active': showId === 2}" data-id="2" v-on:click="changeSelectId">一食堂</li>
        <li :class="{'active': showId === 3}" data-id="3" v-on:click="changeSelectId">二食堂</li>
        <li :class="{'active': showId === 4}" data-id="4" v-on:click="changeSelectId">三食堂</li>
        <li :class="{'active': showId === 5}" data-id="5" v-on:click="changeSelectId">四食堂</li>
        <li :class="{'active': showId === 6}" data-id="6" v-on:click="changeSelectId">五食堂</li>
      </ul>
    </div>

    <div class="food-wrapper">
      <ul>
        <li class="item" v-for="item in foodList" :key="item.id">
          <div class="left-wrapper">
            <router-link :to="{path: '/food/detail', query: {id: item.id}}"><img :src="item.image"  :alt="item.title"></router-link>
          </div>
          <div class="right-wrapper">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>[{{ item.area }}] {{ item.desc }}</span>
            </div>
            <div class="other-info">
              <span class="price">{{ item.price }}</span> 元
              <span class="sale-count">已售 {{ item.sale_count }} 份</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import axios from '../../api/axios'
export default {
  data () {
    return {
      carouselData: [],
      foodList: [],
      schoolList: [],
      showId: 1
    }
  },
  created () {
    this.getCarouselData()
    this.getIndexFoodList()
    this.getIndexSchoolList()
  },
  methods: {
    getCarouselData: function () {
      axios.get('/carousel/').then(res => {
        this.carouselData = res.data.result
      })
    },
    getIndexFoodList: function () {
      axios.get('/index/foodlist/').then((res) => {
        this.foodList = res.data.result
      })
    },
    getIndexSchoolList: function () {
      axios.get('/index/schoollist/').then((res) => {
        this.schoolList = res.data.result
      })
    },
    changeSelectId: function (event) {
      var id = event.target.getAttribute('data-id')
      this.showId = parseInt(id)
      console.log(this.showId)
    }
  }
}
</script>

<style>
.top-menu {
  display: flex;
  padding: 8px 0;
}
.top-menu .school {
  flex: 1;
}
.top-menu .search {
  flex: 2;
  padding: 0px 10px;
  position: relative;
}
.top-menu .school .ivu-select-selection {
  border: none;
}
.top-menu .school span.ivu-select-placeholder {
  padding-left: 20px;
}
.top-menu .school span.ivu-select-selected-value {
  padding-left: 20px;
}
.top-menu .search input {
  width: 100%;
  height: 30px;
  border: none;
  background: #efefef;
  border-radius: 3px;
  padding-left: 30px;
  outline-style: none;
}
.top-menu .search i {
  position: absolute;
  top: 8px;
  left: 20px;
  font-size: 14px;
}
.carousel-img {
  width: 100%;
  height: 100%;
}

.slide-menu {
  width: 100%;
}
.slide-menu ul {
  list-style: none;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  border-bottom: 1px solid #efefef;
}
.slide-menu ul li {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
}
.slide-menu ul li.active {
  border-bottom: 2px solid #19be6b;
}

.food-wrapper {
  padding: 10px;
  width: 100%;
}
.food-wrapper ul {
  width: 100%;
  list-style: none;
}
.food-wrapper ul li.item {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid #e9eaec;
}
.food-wrapper ul li.item .left-wrapper {
  flex: 1;
}
.food-wrapper ul li.item .left-wrapper img {
  width: 100%;
}
.food-wrapper ul li.item .right-wrapper {
  flex: 2;
  padding-left: 15px;
  position: relative;
  width: 100%;
}
.food-wrapper ul li.item .right-wrapper .title {
  font-size: 16px;
}
.food-wrapper ul li.item .right-wrapper .other-info {
  position: absolute;
  bottom: 5px;
  left: 15px;
  color: #19be6b;
  font-size: 14px;
}
.other-info {
  width: 90%;
}
.other-info .price {
  font-size: 16px;
}
.other-info .sale-count {
  float: right;
  font-size: 12px;
  color: #80848f;
  line-height: 24px;
}
</style>
