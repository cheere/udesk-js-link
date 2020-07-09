declare module 'udesk-js-link' {
  export class RXUdeskJSApi {
    /**
     * @init
     * 初始化 Udesk 通用字段
     */
    static initApi: (
      config: object, // not allow null
    ) => void;

    /** 下面一般都不会使用 */
    static link: () => string;
    static code: () => string;
    static im_user_key: () => string;
    static companyDomain: () => string;
  }


  export class RXUdeskJS {
    /**
     * @remove
     * customer 移除 客户信息
     */
    static clearCustomer: () => void;

    /** 
     * @add
     * customer 添加 客户信息
     */
    static setCustomer: (
      map: object, // allowable null
    ) => void;

    /** 
     * @return url
     * product 咨询对象
     */
    static getProductUrl: (
      map: object, // allowable null
    ) => string;

    /** 
     * @return url
     * product 咨询对象
     */
    static getProductUrlAutoPrefix: (
      map: object, // allowable null
    ) => string;

    /** 
     * @return url
     * product 空 咨询对象
     */
    static getNoneProductUrl: () => string;

    /**
     * @goto
     * 跳转到 客服聊天页面
     */
    static toServiceIM: (
      url: string, // 一般为 productUrl
    ) => void;

    /**
     * @goto
     * 自定义搜索关键词 - 第三方网站链接示例（如：公司官网）
     */
    static websiteToSearch: (
      word: string, // 搜索关键词
    ) => void;

    /**
     * @goto
     * 自定义搜索关键词 - 网页插件链接示例
     */
    static plugInToSearch: (
      word: string, // 搜索关键词
    ) => void;

    /**
     * @goto
     * url跳转 前，网址进行加密
     */
    static UdeskGotoUrl: (
      url: string, // 链接
    ) => void;

  }
}