const { fibonacci, isPowerOfTwo, isPowerOfBitWise, linearSearch, binarySearch, bubbleSort, insertionSort, recursiveBinarySearch, quickSort } = require('./src/module')
const test = require('./src/test')

test.dbConnect();

test.createMemo();
test.searchMemo(1, {});
test.updateMemo(1, {})
test.deleteMemo(1);
test.dbClose();