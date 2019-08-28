const ApiBrands = (count = 1, page = 'index') => {
    const output = [];

    let size = '1235/400';
    if (page === 'category') {
        size = '1280/250';
    }

    for (let i = 0; i < count; i += 1) {
        output.push({
            src: `https://picsum.photos/${size}`,
            href: '#',
        });
    }

    return output;
};

module.exports = ApiBrands;
