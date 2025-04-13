function add(a, b) {
  return a + b;
}

function isEven(a) {
  return a % 2 === 0;
}

function asyncdata() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('async data here');
    });
  });
}

let dubarray = (arr)=>{
  let newar = [];
  for (let i = 0; i < arr.length; i++) {
   if(!newar.includes(arr[i])){
    newar.push(arr[i]);
   }
  }
  return newar;
}

module.exports = {
  add,
  isEven,
  asyncdata,
  dubarray
};
