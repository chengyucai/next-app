module.exports.isSelected = () => Math.floor(Math.random() * 10) >= 4;
module.exports.shuffle = arr => {
    let j;
    let temp;
    const newArr = arr;
    for (let i = newArr.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    return newArr;
};
