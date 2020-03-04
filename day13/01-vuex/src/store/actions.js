export default {
  // 网络请求等异步操作需先经过actions
  aUpdateInfo(context, payload) {
    // setTimeout(() => {
    //   // 拿到上下文后使用commit提交到mutation进行state值的修改
    //   context.commit('updateInfo', payload)
    //   payload.success(payload.name)
    // }, 1000);
    return new Promise(resolve => {
      setTimeout(() => {
        // 拿到上下文后使用commit提交到mutation进行state值的修改
        context.commit('updateInfo', payload)
        resolve(payload.name)
      }, 1000);
    })
  }
}