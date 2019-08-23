import * as React from "react";
import classNames from "classnames";
import Link from "next/link";
import "../css.scss";

const Module = () => {
  const classname = "routes";
  const PageList = [
    {
      cate: "Home",
      subMenu: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "關於我們",
          path: "/about"
        },
        {
          title: "會員條款頁",
          path: "/terms"
        },
        {
          title: "常見問題",
          path: "/faq"
        },
        {
          title: "聯絡我們頁",
          path: "/contactUs"
        },
        {
          title: "隱私權政策",
          path: "/privacy"
        }
      ]
    },
    {
      cate: "Category",
      subMenu: [
        {
          title: "照片分類頁",
          path: "/category/photo"
        },
        {
          title: "影片分類頁",
          path: "/category/video"
        },
        {
          title: "文章分類頁",
          path: "/category/article"
        }
      ]
    },

    {
      cate: "Collection",
      subMenu: [
        {
          title: "收藏列表頁",
          path: "/collectionTable"
        },
        {
          title: "收藏列表頁-資料夾瀏覽",
          path: "/collectionBrowse"
        }
      ]
    },

    {
      cate: "Search",
      subMenu: [
        {
          title: "照片搜尋頁",
          path: "/search/photo"
        },
        {
          title: "影片搜尋頁",
          path: "/search/video"
        },
        {
          title: "文章搜尋頁",
          path: "/search/article"
        }
      ]
    },
    {
      cate: "Product",
      subMenu: [
        {
          title: "照片商品頁",
          path: "/product/photo"
        },
        {
          title: "影片商品頁",
          path: "/product/video"
        },
        {
          title: "文章商品頁",
          path: "/product/article"
        }
      ]
    },
    {
      cate: "Record",
      subMenu: [
        {
          title: "使用現況",
          path: "/status"
        },
        {
          title: "下載紀錄",
          path: "/download"
        },
        {
          title: "訂單查詢",
          path: "/order"
        }
      ]
    },
    {
      cate: "Recommend",
      subMenu: [
        {
          title: "主題推薦",
          path: "/recommend/"
        },
        {
          title: "推薦照片",
          path: "/recommend/photo"
        },
        {
          title: "推薦影片",
          path: "/recommend/video"
        },
        {
          title: "推薦文章",
          path: "/recommend/article"
        }
      ]
    },
    {
      cate: "Order",
      subMenu: [
        {
          title: "素材購物車",
          path: "/cart"
        },
        {
          title: "素材結帳",
          path: "/checkouting"
        },
        {
          title: "素材結帳完成",
          path: "/checkouted"
        },
        {
          title: "素材訂單明細",
          path: "/checkouted"
        },
        {
          title: "方案購物車",
          path: "/cart/plan"
        },
        {
          title: "方案結帳",
          path: "/checkouting/plan"
        },
        {
          title: "方案結帳完成",
          path: "/checkouted/plan"
        },
        {
          title: "方案訂單明細",
          path: "/checkouted/plan"
        },
        {
          title: "方案訂單退款",
          path: "/checkouted/plan"
        }
      ]
    }
  ];
  return (
    <div className={classNames(classname)}>
      {PageList.map((table: any, index: number) => {
        const Menu = table.subMenu.map((data: any, index: number) => {
          return (
            <div key={index}>
              <Link href={data.path}>
                <a>{data.title}</a>
              </Link>
            </div>
          );
        });
        return (
          <div key={index}>
            <div>{table.cate}</div>
            {Menu}
          </div>
        );
      })}
    </div>
  );
};
export default Module;
