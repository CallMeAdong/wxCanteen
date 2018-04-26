<template>
  <div id="app">
    <div>
      <div class="head">
        <ul>
          <li :class="{'active': showId === 1}" data-id="1" v-on:click="changeShowId">
            <router-link to="/discover/raiders/">美食攻略</router-link>
          </li>
          <li :class="{'active': showId === 2}" data-id="2" v-on:click="changeShowId">
            <router-link to="/discover/tu/">吐槽天地</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showId: 1
    }
  },
  methods: {
    changeShowId: function (event) {
      var id = event.target.getAttribute('data-id')
      this.showId = parseInt(id)
    }
  }
}
</script>

<style>
.head ul {
  list-style: none;
  display: flex;
  border-bottom: 1px solid #efefef;
}
.head ul li {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}
.head ul li.active {
  border-bottom: 2px solid #19be6b;
}
.head ul li a {
  color: #555;
  font-size: 14px;
}
</style>
