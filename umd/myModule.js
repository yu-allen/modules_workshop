(function (root, factory) {
  if (typeof define ==='function' && define.amd) {
    define('myModule', factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
})(this, function() {
  const a = 10;

  function add(a, b) {
    return a + b;
  };

  function subtract(a, b) {
    return a - b;
  };

  return {
    add,
    subtract,
  };
});
