var moudleA = (function(){

  var obj = {};
  var name = 'tango';
  var flag = true;
  
  function sum(num1, num2) {
    return num1 + num2;
  }

  obj.name = name;
  obj.sum  = sum;
  obj.flag = flag;

  return obj;
})()


