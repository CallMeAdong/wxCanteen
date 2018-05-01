<template>
  <div id="app">
    <back-nav title="商品详情"></back-nav>
    <div v-if="foodData" style="margin-top: 40px;">
        <div class="image">
            <img :src="foodData.image" :alt="foodData.title">
        </div>
        <div class="info">
          <div class="title">
              <span>{{ foodData.title }}</span>
              <span>销售：{{ foodData.sale_count }}</span>
          </div>
          <div class="price"></div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from '../../api/axios'
export default {
  data () {
    return {
      foodData: null
    }
  },
  created () {
    axios.get('/index/foodlist/').then((res) => {
      this.foodData = res.data.result[0]
    })
  }
}
</script>

<style>
.image img {
    width: 100%;
    max-width: 100%;
    max-height: 200px;
}
</style>
