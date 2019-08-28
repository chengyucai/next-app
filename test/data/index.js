const ApiTemplate = require("./template");

// Require
const { shuffle } = require("./utils");
const ApiNavBar = require("./navBar");
const ApiPopularKeywords = require("./popularKeywords");
const ApiProfile = require("./profile");
const ApiProducts = require("./products");
const ApiProduct = require("./product");
const ApiBrands = require("./brands");
const ApiAds = require("./ads");
const ApiBanners = require("./banners");
const ApiSideBar = require("./sideBar");
const ApiOrders = require("./orders");
const ApiOrder = require("./order");
const ApiFilter = require("./filter");
const ApiTransactionTerms = require("./transactionTerms");

function responseData(data) {
  const output = ApiTemplate;
  output.data = data;
  return output;
}

module.exports = router => {
  // Router
  // 選單列表
  router.get("/navBar", (req, res) => {
    return res.json(responseData(ApiNavBar()));
  });

  // 熱門關鍵字
  router.get("/popularKeywords", (req, res) => {
    return res.json(responseData(ApiPopularKeywords()));
  });

  // 個人資訊
  router.get("/profile", (req, res) => {
    return res.json(responseData(ApiProfile()));
  });

  // 產品列表
  router.get("/products/:page", (req, res) => {
    switch (req.params.page) {
      case "index":
        switch (req.query.type) {
          case "recommand":
          case "new":
          case "popular":
            return res.json(responseData(ApiProducts(4)));
            break;
          default:
            // promotion
            return res.json(responseData(ApiProducts(4, true)));
            break;
        }
        break;
      case "category":
        const pagination = req.query.pagination;
        return res.json(responseData(shuffle(ApiProducts(12, pagination))));
        break;
      case "search":
      case "collection":
        return res.json(responseData(shuffle(ApiProducts(12))));
        break;
      case "cart":
        return res.json(responseData(ApiProducts(5)));
        break;
      default:
        // relate
        return res.json(responseData(ApiProducts(4, true)));
        break;
    }
    return res.send(req.query);
  });

  // 品牌列表
  router.get("/brands", (req, res) => {
    return res.json(responseData(ApiBrands(16)));
  });

  // 廣告圖
  router.get("/ads", (req, res) => {
    return res.json(responseData(ApiAds()));
  });

  // Banner
  router.get("/banners/:page", (req, res) => {
    switch (req.params.page) {
      case "category":
        return res.json(responseData(ApiBanners(1, req.params.page)));
        break;
      default:
        // index
        return res.json(responseData(ApiBanners(9)));
        break;
    }
  });

  // sidebar menu
  router.get("/sidebar/:category", (req, res) => {
    return res.json(responseData(ApiSideBar()));
  });

  router.get("/filter/", (req, res) => {
    return res.json(responseData(ApiFilter()));
  });

  // 產品明細
  router.get("/product/:uid", (req, res) => {
    return res.json(responseData(ApiProduct(req.params.uid)));
  });

  // 訂單列表
  router.get("/orders", (req, res) => {
    return res.json(responseData(ApiOrders(4)));
  });

  // 訂單明細
  router.get("/order/:uid", (req, res) => {
    return res.json(responseData(ApiOrder()));
  });

  // 交易條款
  router.get("/transactionTerms", (req, res) => {
    return res.json(responseData(ApiTransactionTerms()));
  });

  return router;
};
