const ApiBrands = (count = 1) => {
    const output = [];

    for (let i = 0; i < count; i += 1) {
        output.push({
            img: 'http://placehold.jp/115x115.png',
            link: '#',
            title: 'brand',
        });
    }

    return output;
};

module.exports = ApiBrands;
