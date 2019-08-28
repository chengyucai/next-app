const ApiFilter = () => {
    const output = [
        {
            name: '排序',
            subItems: [
                {
                    name: '依上架時間新到舊',
                    type: '',
                },
                {
                    name: '依上架時間舊到新',
                    type: '',
                },
                {
                    name: '依產品價格低到高',
                    type: '',
                },
                {
                    name: '依產品價格高到低',
                    type: '',
                },
                {
                    name: '依旅遊金點數少到多',
                    type: '',
                },
                {
                    name: '依旅遊金點數多到少',
                    type: '',
                },
            ],
        },
        {
            name: '價格區間',
            subItems: [
                {
                    name: '1,000以下',
                    type: '',
                },
                {
                    name: '1,000~5,000',
                    type: '',
                },
                {
                    name: '5,000~10,000',
                    type: '',
                },
                {
                    name: '10,000~30,000',
                    type: '',
                },
                {
                    name: '30,000以上',
                    type: '',
                },
            ],
        },
        {
            name: '點數兌換級距',
            subItems: [
                {
                    name: '1,000以下',
                    type: '',
                },
                {
                    name: '1,000~5,000',
                    type: '',
                },
                {
                    name: '5,000~10,000',
                    type: '',
                },
                {
                    name: '10,000~30,000',
                    type: '',
                },
                {
                    name: '30,000以上',
                    type: '',
                },
            ],
        },
        {
            name: '品牌篩選',
            subItems: [
                {
                    name: '1,000以下',
                    type: '',
                },
                {
                    name: '1,000~5,000',
                    type: '',
                },
                {
                    name: '5,000~10,000',
                    type: '',
                },
                {
                    name: '10,000~30,000',
                    type: '',
                },
                {
                    name: '30,000以上',
                    type: '',
                },
            ],
        },
    ];

    return output;
};

module.exports = ApiFilter;
