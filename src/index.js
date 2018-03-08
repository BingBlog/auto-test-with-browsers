const isType = (data, type) => {
    return ['[object ', type, ']'].join('') === Object.prototype.toString.call(data)
};

const isFunction = (data) => {
    return isType(data, 'Function')
};

const isArray = (data) => {
    return isType(data, 'Array')
};


module.exports = {
    isType,
    isFunction,
    isArray
}