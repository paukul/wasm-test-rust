const adder = require('./main.wasm');

adder().then(result => {
  debugger; 
  const add = result.instance.exports.add;
  console.log(add(5, 10));
});