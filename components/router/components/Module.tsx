import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Btn, { Mode } from '@components/bt_bsic/';
import '../css.scss';

const Module = () => {
    const classname = 'routes';
    const PageList = [
        {
            cate: 'Home',
            subMenu: [
                {
                    title: 'Home',
                    link: {
                        href: '/',
                    },
                },
                {
                    title: '關於我們',
                    link: {
                        href: '/about',
                    },
                },
                {
                    title: '會員條款頁',
                    link: {
                        href: '/terms',
                    },
                },
                {
                    title: '常見問題',
                    link: {
                        href: '/faq',
                    },
                },
                {
                    title: '聯絡我們頁',
                    link: {
                        href: '/contactUs',
                    },
                },
                {
                    title: '隱私權政策',
                    link: {
                        href: '/privacy',
                    },
                },
            ],
        },
        {
            cate: 'Category',
            subMenu: [
                {
                    title: '照片分類頁',
                    link: {
                        href: '/category/[index]',
                        as: '/category/photo',
                    },
                },
                {
                    title: '影片分類頁',
                    link: {
                        href: '/category/[index]',
                        as: '/category/video',
                    },
                },
                {
                    title: '文章分類頁',
                    link: {
                        href: '/category/[index]',
                        as: '/category/article',
                    },
                },
            ],
        },

        {
            cate: 'Collection',
            subMenu: [
                {
                    title: '收藏列表頁',
                    link: {
                        href: '/collectionTable',
                    },
                },
                {
                    title: '收藏列表頁-資料夾瀏覽',
                    link: {
                        href: '/collectionBrowse',
                    },
                },
            ],
        },

        {
            cate: 'Search',
            subMenu: [
                {
                    title: '照片搜尋頁',
                    link: {
                        href: '/search/photo',
                    },
                },
                {
                    title: '影片搜尋頁',
                    link: {
                        href: '/search/video',
                    },
                },
                {
                    title: '文章搜尋頁',
                    link: {
                        href: '/search/article',
                    },
                },
            ],
        },
        {
            cate: 'Product',
            subMenu: [
                {
                    title: '照片商品頁',
                    link: {
                        href: '/product/[index]?id=P00001',
                        as: '/product/photo?id=P00001',
                    },
                },
                {
                    title: '影片商品頁',
                    link: {
                        href: '/product/[index]?id=V00002',
                        as: '/product/video?id=V00002',
                    },
                },
                {
                    title: '文章商品頁',
                    link: {
                        href: '/product/[index]?id=A00003',
                        as: '/product/article?id=A00003',
                    },
                },
            ],
        },
        {
            cate: 'Record',
            subMenu: [
                {
                    title: '使用現況',
                    link: {
                        href: '/status',
                    },
                },
                {
                    title: '下載紀錄',
                    link: {
                        href: '/download',
                    },
                },
                {
                    title: '訂單查詢',
                    link: {
                        href: '/order',
                    },
                },
            ],
        },
        {
            cate: 'Recommend',
            subMenu: [
                {
                    title: '主題推薦',
                    link: {
                        href: '/recommend/',
                    },
                },
                {
                    title: '推薦照片',
                    link: {
                        href: '/recommend/photo',
                    },
                },
                {
                    title: '推薦影片',
                    link: {
                        href: '/recommend/video',
                    },
                },
                {
                    title: '推薦文章',
                    link: {
                        href: '/recommend/article',
                    },
                },
            ],
        },
        {
            cate: 'Order',
            subMenu: [
                {
                    title: '素材購物車',
                    link: {
                        href: '/cart',
                    },
                },
                {
                    title: '素材結帳',
                    link: {
                        href: '/checkouting',
                    },
                },
                {
                    title: '素材結帳完成',
                    link: {
                        href: '/checkouted',
                    },
                },
                {
                    title: '素材訂單明細',
                    link: {
                        href: '/checkouted',
                    },
                },
                {
                    title: '方案購物車',
                    link: {
                        href: '/cart/plan',
                    },
                },
                {
                    title: '方案結帳',
                    link: {
                        href: '/checkouting/plan',
                    },
                },
                {
                    title: '方案結帳完成',
                    link: {
                        href: '/checkouted/plan',
                    },
                },
                {
                    title: '方案訂單明細',
                    link: {
                        href: '/checkouted/plan',
                    },
                },
                {
                    title: '方案訂單退款',
                    link: {
                        href: '/checkouted/plan',
                    },
                },
            ],
        },
    ];
    return (
        <div className={classNames(classname)}>
            <Btn word={'Slide'} mode={Mode.Contained} />
            <div className={classNames(`${classname}-list`)}>
                {PageList.map((table: any, index: number) => {
                    const Menu = table.subMenu.map((data: any, index: number) => {
                        // return table.subMenu.map((data: any, index: number) => {
                        return (
                            <div key={index}>
                                <Link {...data.link}>
                                    <a>{data.title}</a>
                                </Link>
                            </div>
                        );
                    });
                    return (
                        <React.Fragment key={index}>
                            <h3>{table.cate}</h3>
                            {Menu}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
export default Module;
