var assert = require('assert');

// function to write csv file
const executeFibonacciAndReturnExecTime = (func, n) => {
    let hrstart = process.hrtime();  
    func(n);
    let hrend = process.hrtime(hrstart)
    return hrend[0] * 1e9 + hrend[1]; // result in ms
  }

// function to write csv file
const resultToCSV = (fileName, result) => {
    const csvData = result.reduce( (accum, current) => `${accum}${current.join(',')}\n`,'');
    fs.writeFile(fileName, csvData, function (err) {
        if (err) console.error(err);
    });
}

// calc Fibonaccis for different inputs
const calcFibonacci = (impls, inputs) => {
    let result = [];
    result[0] = ['']; // Graph heading
    result[0].push(inputs);

    impls.forEach((impl, index) => {
        let implResult = [];
        implResult.push(impl.alg);
        inputs.forEach ((n) => {
        try {
            implResult.push(executeFibonacciAndReturnExecTime(impl.func.fibonacci, n));    
        }
        catch {
            implResult.push('error');
        }
        });
    result[index+1] = implResult;
    });
    return result;
}

const assertResults = (impls) => {
    const fibSeq = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];
    fibSeq.forEach( (elem, index) => 
        impls.forEach((impl) => 
            assert(impl.func.fibonacci(index)===elem)
        )
    );
    return true;
}

module.exports = { resultToCSV, calcFibonacci, assertResults };