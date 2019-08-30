const casual = require('casual');

const pad = (num = 0, n = 0) => {
    let len = num.toString().length;
    while (len < n) {
        num = '0' + num;
        len++;
    }
    return num;
};

const ApiProducts = (count = 1) => {
    const output = [];
    const userL = count.toString().length;
    const userLC = userL <= 6 ? 6 : userL + 1;

    for (let i = 0; i < count; i++) {
        output.push({
            userID: pad(i, userLC),
            name: casual.name,
            country: casual.country,
            city: casual.countcityry,
            email: casual.email,
            phone: casual.phone,
        });
    }

    return output;
};

module.exports = ApiProducts;
