// import {name, sum, flag} from './aaa.js'

// 对象形式导入
import {name, flag, sum} from './aaa.js'

if(flag){
  console.log('hello tango');
  
}
console.log(sum(20, 50));

// 直接导入变量
import {num1, height} from './aaa.js'

console.log(num1, height);


// 直接导入函数或类
import {mul, Person, Per} from './aaa.js';
console.log(mul(2, 5));

const p = new Person();
console.log(p);
p.run();

const per = new Per();
per.run();


// 导入默认
// import a from './aaa.js';
// console.log(a);

import show from './aaa.js';
show();

// 导入所有
import * as all from './aaa.js'
console.log(all);

console.log(all.sum(12,45));

const person = new all.Person();
person.run();
