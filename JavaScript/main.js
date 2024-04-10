const { fibonacci, isPowerOfTwo, isPowerOfBitWise, linearSearch, binarySearch, bubbleSort, insertionSort, recursiveBinarySearch, quickSort } = require('./src/module')

// const getSomeThing = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve('some data');
//     reject('some error');
//   });
// }

// getSomeThing().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// })

// 이를 작성하는 다른 방법!
// const re = getSomeThing().then(data => {
//   console.log(data);
//   return 'fucking return!';
// }).then(date => {
//   console.log('hey~~', date);
// }).catch(err => {
//   console.error('Error 발생!: ', err);
// })

// console.log(re);
// 오류 작성시 어떻게 대처??

const sqlCreate = async () => {
  const re = await sqlDelete();

  if(re.status !== 200) {
    throw new Error("hdfashfsd");
  }
}

const sqlDelete = () => {
  return new Promise((resolve, reject) => {
    reject('sqlDelete Fail');
    resolve('sqlDelete Access');
  })
}

const sqlite3 = async () => {
  const as = await sqlCreate()
  console.log(as);
}

sqlDelete()
  .then(result => console.log(result))
  .catch(err => console.log(err))

// 리턴으로 주고싶다면, async으로, 체이닝을 하고 싶다면, Promise로 해라!! 라는 느까ㅣㅁ쓰??