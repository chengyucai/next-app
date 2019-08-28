const { isSelected } = require('./utils');

const ApiProduct = uid => {
    const type = uid == 'PD0001' ? '旅遊行程' : '活動報名';
    const payment =
        uid == 'PD0001'
            ? [
                  {
                      title: '使用現金',
                      list_price: 2221,
                      sale_price: 1888,
                      point: null,
                      write: null,
                  },
                  {
                      title: '使用現金+旅遊金',
                      list_price: null,
                      sale_price: 300,
                      point: 500,
                      write: null,
                  },
              ]
            : [
                  {
                      title: '使用旅遊金+3篇分享文',
                      list_price: null,
                      sale_price: null,
                      point: 650,
                      write: 3,
                  },
                  {
                      title: '使用現金+旅遊金',
                      list_price: null,
                      sale_price: 300,
                      point: 500,
                      write: null,
                  },
                  {
                      title: '使用旅遊金',
                      list_price: null,
                      sale_price: null,
                      point: 800,
                      write: null,
                  },
              ];

    const output = {
        uid: uid,
        title: '探險冰與火之歌體驗-黃金圈 & 凱利斯 ( Kerid ) 火山口巴士一日遊',
        brand: '',
        type: type,
        qty: 10,
        flash_sale: {
            start_date: '2019-10-05',
            end_date: '2019-10-17',
        },
        tags: ['冰島', '冰與火之歌', '巴士一日遊', '美景美食', '當地體驗', '黃金圈', '凱利斯', '+5'],
        brief: '<ul><li>產品簡述1</li><li>產品簡述2</li></ul>',
        desp: "<div>產品介紹<div><img src='https://picsum.photos/id/161/390/220'></div></div>",
        expire: isSelected ? '使用效期說明...................................................' : null,
        use_desp: '<ul><li>使用說明1</li><li>使用說明2</li><li>使用說明3</li><li>使用說明4</li></ul>',
        report: isSelected
            ? '<ul><li>報名規則1</li><li>報名規則2</li><li>報名規則2</li><li>報名規則3</li><li>報名規則4</li><li>報名規則5</li><li>報名規則6</li></ul>'
            : null,
        notice: isSelected ? '<ul><li>注意事項1</li><li>注意事項2</li><li>注意事項3</li><li>注意事項4</li></ul>' : null,
        payment: payment,
        img: [
            'https://picsum.photos/id/155/790/400',
            'https://picsum.photos/id/154/790/400',
            'https://picsum.photos/id/157/790/400',
            'https://picsum.photos/id/158/790/400',
            'https://picsum.photos/id/159/790/400',
            'https://picsum.photos/id/160/790/400',
            'https://picsum.photos/id/161/790/400',
            'https://picsum.photos/id/162/790/400',
        ],
        spec: [
            {
                uid: 'SP001',
                title: '規格ㄧ',
            },
            {
                uid: 'SP002',
                title: '規格二',
            },
        ],
        delivery: [
            {
                uid: 'DL001',
                title: '宅配',
                price: 60,
            },
        ],
        add_purchase: [
            {
                uid: 'APD001',
                title: 'Nintendo Switch 明星大亂鬥特別版',
                price: 1900,
                qty: 10,
                img: 'http://placehold.jp/100x100.png',
            },
            {
                uid: 'APD002',
                title: 'Nintendo Switch 精靈寶可夢皮卡丘支援中文',
                price: 1790,
                qty: 10,
                img: 'http://placehold.jp/100x100.png',
            },
            {
                uid: 'APD003',
                title: 'QUBE Nintendo Switch 9H 鋼化玻璃保護貼',
                price: 1190,
                qty: 10,
                img: 'http://placehold.jp/100x100.png',
            },
            {
                uid: 'APD004',
                title: 'HORI卡夾收納盒6+2 NSW-020(白色)',
                price: 1290,
                qty: 10,
                img: 'http://placehold.jp/100x100.png',
            },
        ],
    };

    return output;
};

module.exports = ApiProduct;
