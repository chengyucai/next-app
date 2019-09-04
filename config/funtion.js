module.exports.Random = function(max, min = 1000) {
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.windmill = function(
    value,
    length,
    { increments = 1, turn = true, min = 0, loop = false, bcpl = true } = {},
) {
    length = typeof length == 'number' ? length : length.length;
    turn ? (value += increments) : (value -= increments);

    if (value > (bcpl ? length - 1 : length)) value = loop ? min : bcpl ? length - 1 : length;
    if (value < min) value = loop ? (bcpl ? length - 1 : length) : min;

    return value;
};
