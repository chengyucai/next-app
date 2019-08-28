const { isSelected } = require('./utils');

const ApiOrder = () => {
    const invoiceType = isSelected;

    const output = {
        odr_no: '160101000001',
        status: '',
        user_id: 10,
        name: '王某某',
        email: 'test@test.com',
        country_area_code: '886',
        phone: '09xxxxxxxx',
        city: '台北市',
        area: '內湖區',
        zipcode: '1234',
        address: '石潭路XXX號',
        payment: 'Credit',
        invoice_type: invoiceType ? '二聯式' : '三聯式',
        invoice: 'NX1090000',
        company_name: !invoiceType ? '雄獅資訊股份有限公司' : null,
        bin: !invoiceType ? '12345678' : null,
        activity_code: 'ACTIVITY_XDXD',
        activity_discount: 500,
        coupon_code: 'COUPON_XDXD',
        coupon: 500,
        total: 10060,
        shipment: 60,
        point: 0,
        write: 3,
        items: [
            {
                uid: 'PD0001',
                title: 'XXXXX',
                qty: 1,
                spec: '一日遊',
                price: null,
                point: 3000,
                write: 10,
                status: '訂單處理中',
                ship_code: '貨號 2013040',
                img: 'https://picsum.photos/id/250/480/235',
                write_items: [
                    {
                        check_date: '2018-12-06 17:30',
                        title: '每個人都忽略這旅遊立刻就必須做的是，我不敢相信我的眼睛!',
                        status: '審核中',
                    },
                    {
                        check_date: '2018-12-05 17:30',
                        title: '東京迪士尼遊記漫遊',
                        status: '審核中',
                    },
                    {
                        check_date: '2018-12-04 17:30',
                        title: '為自己安排假期，規劃一趟美好旅程',
                        status: '審核中',
                    },
                    {
                        check_date: '2018-12-03 17:30',
                        title: '銀白雪域冰氛樂，一起凍感滑雪吧!',
                        status: '通過',
                    },
                    {
                        check_date: '2018-12-02 17:30',
                        title: '拋開煩悶工作，連假請2休5旅遊大確幸!',
                        status: '通過',
                    },
                ],
                include_ship: 0,
            },
            {
                uid: 'PD0002',
                title: '紐巴倫跑鞋 New Balance X90R',
                qty: 1,
                spec: '24號',
                price: 4050,
                point: null,
                write: null,
                status: null,
                ship_code: null,
                img: 'https://picsum.photos/id/250/480/235',
                write_items: null,
                include_ship: 60,
            },
            {
                uid: 'PD0003',
                title: '針織毛帽Hynotized Beanie',
                qty: 1,
                spec: 'M',
                price: 3050,
                point: null,
                write: null,
                status: '退訂處理中',
                ship_code: null,
                img: 'https://picsum.photos/id/250/480/235',
                write_items: null,
                include_ship: 60,
            },
        ],
    };

    return output;
};

module.exports = ApiOrder;
