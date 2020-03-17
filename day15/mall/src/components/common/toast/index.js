import Toast from './Toast.vue'

const obj = {};

obj.install = Vue => {
  // console.log(Vue);
  /* document.body.appendChild(Toast.$el);
  Vue.prototype.$toast = Toast; */

  // 1 创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  // 2 根据组件构造器，创建组件对象
  const toast = new toastContrustor();

  // 3 将组件对象手动挂载到某一元素中
  toast.$mount(document.createElement('div'));

  // 4 在body上添加toast元素模板
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj;