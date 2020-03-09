export function debounce(func, delay) {
  console.log('this', this);
  let timer = null;
  return function(...args) {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      // func()
    }, delay)  
  }
}