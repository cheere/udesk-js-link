
const sdkName = 'udesk-js-link'

function getEnv() {
  let debug = false;
  try {
    if (__DEV__) {
      // react - debug
      rdebug = true;
    }
    
    if (process.env.NODE_ENV != 'production') {
      // vue - release
      debug = false;
    }
  } catch (error) {
    console.log(sdkName, '[JSLOG] - getEnv() ', error)
  }
  return debug;
}

const LOGCOLOR = {
  PRODUCT: '#3333cc',
  ERROR: '#ff0000',
  WARN: '#ccff00',
  DEFAULT: '#000',
}

const P_NAMES = [
  'udesk-js-api',
]

export default class JSLOG {
  static get store() {
    if (!this._store) {
      this._store = {
        debug: getEnv(),
        color: LOGCOLOR,
        names: P_NAMES,
      };
    }
    return this._store;
  }

  static init(config) {
    if (!config) throw new Error('js-udesk-link [JSLOG] -> init() -> config=null');
    let debug = getEnv();
    try {
      debug = config.debug || getEnv();
    } catch (error) {}
    config.debug = debug;
    Object.assign(this.store, config);
  }

  static Log() {
    
  }
}