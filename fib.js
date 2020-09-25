fs = require('fs');

const { resultToCSV, calcFibonacci, assertResults } = require('./aux/auxFunctions');

const recursive = require('./impl/recursiveFibonacci');
const memory = require('./impl/memoryFibonacci');
const dynamic = require('./impl/dynamicFibonacci');
const goldenRatio = require('./impl/goldenRatioFibonacci');

const impls = [ 
  { alg: 'recursive', func: recursive },
  { alg: 'memory', func: memory },
  { alg: 'dynamic', func: dynamic },
  { alg: 'goldenRatio', func: goldenRatio } 
];

// small test
assertResults(impls);

// inputs to compare
const inputsTo50 = [ 10, 20, 30, 40];
const inputsTo15k = [ 50, 100, 150, 200, 300, 400, 500, 750, 1000, 1500, 2000, 2500, 5000, 7500, 10000, 12500, 15000];
const inputsTo10M = [ 1000, 1500, 2000, 2500, 5000, 7500, 10000, 15000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 100000, 200000, 300000, 500000, 1000000, 5000000, 1000000];

resultToCSV('inputsTo50.csv', calcFibonacci(impls, inputsTo50));

// remove recursive impl and increase input
impls.shift();
resultToCSV('inputsTo15k.csv', calcFibonacci(impls, inputsTo15k));

// remove memory impl and increase input
impls.shift();
resultToCSV('inputsTo10M.csv', calcFibonacci(impls, inputsTo10M));