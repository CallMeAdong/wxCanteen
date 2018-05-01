<template>
  <div>
    <back-nav title="我的订单"></back-nav>

    <div class="order-wrapper" >
      <ul v-if="orderList">
        <li v-for="item in orderList" :key="item.id">
          <div class="head">
            <span class="stall-info">
              <div class="avatar"><img :src="item.avatar" :alt="item.stall"></div>
              <div class="name">
                <span>{{ item.stall }}</span>
                <span>{{ item.date }}</span>
              </div>
            </span>
            <span class="status">
              <span v-if="item.status === -1">待支付</span>
              <span v-else-if="item.status === 0">正在制作</span>
              <span v-else-if="item.status === 1">已完成</span>
            </span>
          </div>
          <div class="content-body">
            <span>{{ item.content }}</span>
            <span><Icon type="social-yen"></Icon> {{ item.price }}</span>
          </div>
        </li>
      </ul>
        <div v-else>
          <p style="text-align: center;padding: 20px 0;">暂无订单哦</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from '../../api/axios'
import BackNav from '../../components/back-nav'
export default {
  components: {
    BackNav
  },
  data () {
    return {
      orderList: null
    }
  },
  created () {
    this.getOrderList()
  },
  methods: {
    getOrderList: function () {
      axios.get('/user/orders/').then((res) => {
        this.orderList = res.data.result
      })
    }
  }
}
</script>

<style>
.order-wrapper {
    margin-top: 40px;
}
.order-wrapper ul {
    list-style: none;
}
.order-wrapper ul li {
    padding: 10px;
    border-top: 8px solid #dddee1;
}
.order-wrapper .head .stall-info .avatar {
    display: inline-block;
}
.order-wrapper .head .stall-info .name {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    margin-left: 15px;
}
.order-wrapper .head .stall-info .name span:last-child {
    display: block;
    font-size: 12px;
    color: #80848f;
}
.order-wrapper .head .stall-info .avatar img {
    width: 40px;
    height: 40px;
}
.order-wrapper .head .status {
    float: right;
    vertical-align: top;
}
.order-wrapper .content-body {
    margin-left: 55px;
    padding: 10px 0;
    border-top: 1px solid #dddee1;
}
.order-wrapper .content-body span:last-child {
    float: right;
}
</style>
