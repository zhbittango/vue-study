export default {
  template: `
    <div>
      <h2>{{msg}}</h2>
      <button @click="btnClick">click</button>
    </div>
  `,
  data(){
    return {
      msg: 'el跟template同时存在时，后者会替换前者',
    }
  },
  methods: {
    btnClick() {
      alert(this.msg)
    }
  },
} 