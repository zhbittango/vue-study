function add(num1, num2){
  return num1 + num2;
}

function mul(num1, num2){
  return num1 * num2;
}

// commonjs 导出
module.exports = {
  add,
  mul,
};

export var name = 'tango';
export var age = '25';

