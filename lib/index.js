
import RXUdeskJSApi from './services/udesk-js-api';

import RXQueryWithParams from './utils/query-with-params';
import { sha1 } from './utils/encryption/sha1';

import RXGetSignature from './core/signature';
import RXUdeskJS from './core/udesk';

let RXSha1 = sha1;

export default RXUdeskJS;

export { RXUdeskJS, RXUdeskJSApi, RXSha1, RXGetSignature, RXQueryWithParams };
//# sourceMappingURL=index.js.map