var name = 'tango';
var flag = 'true';

function sum(num1, num2) {
  return num1 + num2;
}

// 增强写法对象导出
export {
  name,
  sum,
  flag
}

// 直接导出变量
export var num1 = 1000;
export var height = 100;

// 直接导出函数或类
export function mul(num1, num2){
  return num1 * num2;
}

export function Person(){
  this.run = function () {
    console.log('run');
  }
}
export class Per{
  run(){
    console.log('per');
    
  }
}

// 导出默认default
var abc = 'abc';

// export default abc;
export default function(){
  console.log('default');
  
};