import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency \nStart')

console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01'){
    console.log('passed \nEnd')
} else {
    console.log('failed \nEnd');
}

// console.log(formatCurrency(100) === '1.00' ? "passed" : 'failed');
// console.log(formatCurrency(2000.4) === '20.00' ? "passed" : 'failed');