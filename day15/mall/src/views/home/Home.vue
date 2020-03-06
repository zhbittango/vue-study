<template>
  <div id="home">
    <nav-bar class="home-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import { getHomeMultidata } from 'network/home'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      banner: [],
      recommend: [],
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
};
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>