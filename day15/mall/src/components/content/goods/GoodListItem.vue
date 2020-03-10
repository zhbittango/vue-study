<template>
  <div class="goods" @click="itemClick">
    <!-- <a :href="item.link"> -->
      <img :src="item.show.img" alt="" @load="imgLoad">
      <div>
        <p>{{item.title}}</p>
        <span class="price">¥{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      // console.log(this.$bus);
      this.$bus.$emit('itemImgLoad') // 事件总线
    },
    itemClick() {
      // console.log('----');
      this.$router.push('/detail/' + this.item.iid)
    }
  },

}
</script>

<style>
  a {
    display: block;
  }
  .goods {
    /* width: 100%; */
    text-align: center;
    margin-bottom: 5px;
    font-size: 14px;
  }
  .good-list-item img{
    width: 100%;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods span {
    margin: 5px;
  }

  .price{
    color: var(--color-high-text)
  }
  
  .collect::before{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: top;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    margin-right: 1px;
  }

</style>