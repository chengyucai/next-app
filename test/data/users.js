const casual = require('casual');

const ApiProducts = (count = 1) => {
    const output = [];

    for (let i = 0; i < count; i++) {
        output.push({
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
