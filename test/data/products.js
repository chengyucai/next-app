const { isSelected } = require('./utils');

const ApiProducts = (count = 1, pagination = 1) => {
    const counts = 100;
    const pageSize = 12;
    const defaultPage = pagination;
    const products = [];

    for (let i = 0; i < count; i += 1) {
        var promotion = Math.random() >= 0.5;
        const isCheap = isSelected();
        const listPrice = !promotion ? Math.floor(Math.random() * 10000) : null;
        const salePrice = !promotion && isCheap ? Math.floor(listPrice * 0.8) : null;

        const isWrite = isSelected();
        const point = Math.floor(Math.random() * 1000);
        const write = isWrite ? Math.floor(Math.random() * 10) : null;

        products.push({
            uid: `PD${Math.floor(Math.random() * 1000) + 1}`,
            img: 'https://picsum.photos/id/250/480/235',
            title: '標準廣角鏡頭Wide Angle+微距鏡頭Macro Lens鏡頭組',
            brand: !promotion ? 'Bitplay' : null,
            remark: promotion ? '限10/30前經濟艙以上報名' : null,
            list_price: listPrice, //定價
            sale_price: salePrice, //售價
            point: promotion ? point : null,
            write: promotion ? write : null,
            qty: Math.floor(Math.random() * 10) + 1,
            include_ship: 60,
        });
    }

    return { counts: counts, pageSize: pageSize, defaultPage: defaultPage, products: products };
};

module.exports = ApiProducts;
