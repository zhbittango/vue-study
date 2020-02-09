

const vue = new Vue({
  el: '#vue',
  data: {
    msg: 'hello',
    list: [{
        id: 1,
        name: '算法导论',
        date: '2006-9',
        price: 85,
        number: 1
      },
      {
        id: 2,
        name: '算法导论',
        date: '2006-9',
        price: 90,
        number: 1
      },
      {
        id: 3,
        name: '算法导论',
        date: '2006-9',
        price: 103,
        number: 1
      },
      {
        id: 4,
        name: '算法导论',
        date: '2006-9',
        price: 67,
        number: 1
      },
    ]
  },
  methods: {
    remove(index) {
      this.list.splice(index, 1);
    },
    increment(index) {
      this.list[index].number++;
    },
    decrement(index) {
      this.list[index].number--;
    }
  },
  computed: {
    total: function(){
      let result = 0;
      for(let item of this.list){
        result += item.price * item.number;
      }
      return result;
    }
  },
  filters: {
    finialPrice(price) {
      return '¥' + price.toFixed(2);
    }
  }
})