module.exports.Random = function(max, min = 1000) {
    return Math.floor(Math.random() * (max - min)) + min;
};
