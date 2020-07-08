import UdeskJSApi from '../services/udesk-js-api';
import getSignature from './signature';
import queryWithParams from '../utils/query-with-params';

const CompanyDomain =  UdeskJSApi.companyDomain || '';

export default class UdeskJS {

  static get store() {
    if (!this._store) {
      this._store = {};
    }
    return this._store;
  }

  static companyDomain() {
    return CompanyDomain;
  }

  static setCustomer(map) {
    if (!map || typeof map != 'object') {
      throw new Error('js-udesk-link [UdeskJS] -> setCustomer(map) -> map=null');
    }
    let c_email = map.c_email;
    let c_phone = map.c_phone;
    let customer_token = map.customer_token;
    let c_id = map.c_id; // sdk 专门为签名 扩展的字段
    let singId = '';
    if (c_email) singId = c_email;
    else if (c_phone) singId = c_phone;
    else if (customer_token) singId = customer_token;
    else if (c_id) singId = c_id;

    if (!singId) {
      throw new Error('js-udesk-link [UdeskJS] -> setCustomer(map) -> singId=null');
    }
    const {nonce, timestamp, web_token, signature, im_user_key} = getSignature(singId);
    map.nonce = nonce;
    map.timestamp = timestamp;
    map.web_token = web_token;
    map.signature = signature;
    map.im_user_key = im_user_key;

    let url = queryWithParams(map);
    this.store.customer = map;
    this.store.customerUrl = url;
  }

  // 咨询对象
  static getProductUrl(map) {
    if (!map || typeof map != 'object') {
      throw new Error('js-udesk-link [UdeskJS] -> getProductUrl(map) -> map=null');
    }

    let product_title = map.product_title;
    if (!product_title) {
      throw new Error('js-udesk-link [UdeskJS] -> getProductUrl(map) -> product_title=null');
    }
    let url = queryWithParams(map);
    return url;
  }
  
  // 咨询对象 - 自动添加前缀
  static getProductUrlAutoPrefix(map) {
    if (!map || typeof map != 'object') {
      throw new Error('js-udesk-link [UdeskJS] -> getProductUrlAutoPrefix(map) -> map=null');
    }

    let title = map.title;
    if (!title) {
      throw new Error('js-udesk-link [UdeskJS] -> getProductUrlAutoPrefix(map) -> title=null');
    }

    let productMap = {};
    for (let key in map) {
      let p_key = 'product_' + key;
      let p_value = map[key] || '';
      productMap[p_key] = p_value;
    }
    this.getProductUrl(productMap)
  }

  // 工单信息
  static getTicketUrl(map) {
    if (!map || typeof map != 'object') {
      throw new Error('js-udesk-link [UdeskJS] -> getTicketUrl(map) -> map=null');
    }

    let t_priority_id = map.t_priority_id;
    if (!t_priority_id) {
      throw new Error('js-udesk-link [UdeskJS] -> getTicketUrl(map) -> t_priority_id=null');
    }
    let url = queryWithParams(map);
    return url;
  }

  static toServiceIM(url) {
    url = url || ''
    if (url) url = '&' + url;
    let customerUrl = this.store.customerUrl || '';
    if (customerUrl) {
      customerUrl = '&' + customerUrl;
    }
    let lastUrl = UdeskJSApi.link + customerUrl + url;
    this.UdeskGotoUrl(lastUrl)
  }

  // 自定义搜索关键词 - 第三方网站链接示例（如：公司官网）
  static websiteToSearch(word) {
    word = word || '';
    let url = 'https://www.'+ CompanyDomain +'.com?udesk_wd=' + word;
    this.UdeskGotoUrl(url)
  }
  // 自定义搜索关键词 - 网页插件链接示例
  static plugInToSearch(word) {
    word = word || '';
    let url = 'https://'+ CompanyDomain +'.udesk.cn/im_client/?udesk_wd=' + word;
    this.UdeskGotoUrl(url)
  }

  static UdeskGotoUrl(url) {
    let encodeUrl = encodeURI(url);
    window.location = encodeUrl;
  }
}