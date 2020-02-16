
// commonjs 导入
const {add, mul} = require('./js/mathUtil');

console.log(add(20, 30));
console.log(mul(20, 30));

// es6 导入
import {name, age} from "./js/info";
console.log(name);
console.log(age);

require('./css/index.css');
