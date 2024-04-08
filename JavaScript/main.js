const { fibonacci, isPowerOfTwo, isPowerOfBitWise, linearSearch, binarySearch, bubbleSort, insertionSort, recursiveBinarySearch, quickSort } = require('./src/module')

// console.log(linearSearch([1, 2, 3, 4, 5], 5));
// console.log(binarySearch([1, 5, 6, 10, 340, 511], 511));

// const words = ['ab', 'bddd', 'c', 'd', 'e']

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

// async function run() {
//   console.log('start')
//   let time = await timer(1000);
//   console.log('time: ', time);
//   time = await timer(time+1000);
//   console.log('time: ', time);
//   time = await timer(time+1000);
//   console.log('time: ', time);
//   console.log('end');
// }
// console.log(1);
// async () => await run();
// console.log(2);

// console.log(myfilter(words, element => element.length > 1));

let hey = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('he')
  }, 2000)
});
let hey2 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('he2')
  }, 2000)
});
// hey.then((data) => {
//   console.log('data', data);
//   hey2.then(function(data) {
//     console.log('data2', data)
//   })
// })
// Promise.all([timer(1000), timer(2000), timer(3000)]).then(function(result) {
//   console.log('result', result);
//   console.timeEnd('Promise.all')
// })

Promise.race([timer(1000), timer(2000), timer(3000)]).then(function(result) {
  console.log('result', result);
  console.timeEnd('Promise.race')
})