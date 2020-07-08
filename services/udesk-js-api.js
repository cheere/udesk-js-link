
const DEFAULT_CONFIG = {
  code: '',
  link: '',
  im_user_key: '',
  company_domain: '',
}

export default class UdeskJSApi {
  static get store() {
    if (!this._store) {
      this._store = DEFAULT_CONFIG;
    }
    return this._store;
  }

  static initApi (config) {
    if (!config) {
      throw new Error('js-udesk-link [UdeskApi] -> initApi() -> config=null');
    }
    let code = config.code;
    if (!code) {
      throw new Error('[UdeskApi] -> initApi() -> code=null');
    }
    let link = config.link;
    if (!link) {
      throw new Error('[UdeskApi] -> initApi() -> link=null');
    }
    Object.assign(this.store, config)
  }

  static get link() {
    return this.store.link || '';
  }

  static get code() {
    return this.store.code || '';
  }

  static get im_user_key() {
    return this.store.im_user_key || '';
  }

  static get companyDomain() {
    return this.store.company_domain || '';
  }
}