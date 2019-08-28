const { isSelected, shuffle } = require('./utils');

const ApiOrders = (count = 1) => {
    const productList = [];
    const eventList = [];
    // const isCheap = isSelected();

    for (let i = 0; i < count; i++) {
        const statusShuffle = shuffle([0, 1, 2]);
        const paywayShuffle = shuffle(['ATM', '信用卡']);
        const payStatusShuffle = shuffle([{ type: 'paid', text: '已付款' }, { type: 'unpaid', text: '未付款' }]);

        const num = Math.floor(Math.random() * 10);

        const detail = [];

        for (let j = 0; j < num; j++) {
            const retrunShuffle = shuffle([0, 1, 2, 3, 4]);
            const itemShuffle = shuffle([0, 1, 2]);
            detail.push({
                productId: `1601010000${Math.floor(Math.random() * 10) + 10}`,
                productName: '墾丁飯店住宿眷',
                status: itemShuffle[0],
                cash: Math.floor(Math.random() * 1000),
                point: Math.floor(Math.random() * 1000),
                returnStatus: retrunShuffle[0],
            });
        }

        productList.push({
            odr_no: `1601010000${Math.floor(Math.random() * 10) + 10}`,
            date: '2019-12-05',
            status: statusShuffle[0],
            payment: { way: paywayShuffle[0], status: payStatusShuffle[0] },
            list: detail,
            recipient: {
                name: '王曉民',
                address: '139123912124901284-1284',
                phone: '0937345678',
            },
        });
    }

    for (let i = 0; i < count; i++) {
        const statusShuffle = shuffle([0, 1, 2]);

        const num = Math.floor(Math.random() * 10);

        const detail = [];

        for (let i = 0; i < num; i++) {
            const processShuffle = shuffle([0, 1, 2]);
            const writes = [];
            const count = Math.floor(Math.random() * 5);

            for (let j = 0; j < count; j++) {
                const writeStatus = shuffle(['pass', 'checking']);
                writes.push({
                    date: '2019-12-05',
                    title:
                        '每個人都忽略這旅遊立刻就必須做的事，我不敢相信我的眼睛！,我不敢相信我的眼睛！我不敢相信我的眼睛！',
                    status: writeStatus[0],
                });
            }

            detail.push({
                productId: `1601010000${Math.floor(Math.random() * 10) + 10}`,
                productName: '300騎士環沖繩 DIZO苗栗山海環線挑戰線挑戰線挑戰線挑戰線挑戰線挑戰線挑戰',
                status: processShuffle[0],
                point: Math.floor(Math.random() * 1000),
                writes: writes,
            });
        }

        eventList.push({
            odr_no: `1601010000${Math.floor(Math.random() * 10) + 10}`,
            date: '2019-12-05',
            status: statusShuffle[0],
            list: detail,
        });
    }
    return { productList: productList, eventList: eventList };
};

module.exports = ApiOrders;
