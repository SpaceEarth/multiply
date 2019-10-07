module.exports = function multiply([...first], [...second]) {
    const result = [];
    let arrLinesOfMult = [];
    
    do {
        if (second.length > 0) {
            arrLinesOfMult.push(first.reduceRight((acc, v, i) => {
                const mul = +v * +acc.mulNum + acc.prevAddNum;
                acc.result.push(mul % 10);
                acc.prevAddNum = Math.floor(mul / 10);
                if (i === 0 && acc.prevAddNum !== 0) acc.result.push(acc.prevAddNum);
                return acc;
            }, {
                result: [],
                prevAddNum: 0,
                mulNum: second.pop(),
            }).result.reverse());
        }
        
        let sumOfLastSymbols = 0;

        arrLinesOfMult = arrLinesOfMult.filter((v) => {
            sumOfLastSymbols += v.pop();
            return v.length
        });

        result.push(sumOfLastSymbols % 10);

        if (sumOfLastSymbols >= 10) arrLinesOfMult.push([Math.floor(sumOfLastSymbols / 10)]);

    } while (arrLinesOfMult.length > 0 || second.length > 0);

    return result.reverse().join('');
}
