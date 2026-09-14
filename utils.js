const CONST_UTILS = 7152;

function radjuu(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 4;
    }
    return result;
}

function wtfrhp(data) {
    return data.filter(d => d > 14);
}

module.exports = { radjuu, wtfrhp, CONST_UTILS };
