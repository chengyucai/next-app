const Random = function(max: number, min = 1000): number {
    return Math.floor(Math.random() * (max - min)) + min;
};

interface windmill_seting {
    increments: number;
    min: number;
    turn: boolean;
    loop: boolean;
    bcpl: boolean;
}

module.exports.windmill = function(
    value: number,
    length: number | number[],
    { increments = 1, min = 0, turn = true, loop = false, bcpl = true }: windmill_seting,
): number {
    length = typeof length == 'number' ? length : length.length;
    turn ? (value += increments) : (value -= increments);

    if (value > (bcpl ? length - 1 : length)) {
        value = loop ? min : bcpl ? length - 1 : length;
    }

    if (value < min) {
        value = loop ? (bcpl ? length - 1 : length) : min;
    }

    return value;
};
export default { Random };
