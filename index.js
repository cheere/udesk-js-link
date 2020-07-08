
import UdeskJSApi from './services/udesk-js-api';

import queryWithParams from './utils/query-with-params';
import {sha1} from './utils/encryption/sha1'

import getSignature from './src/signature';
import UdeskJS from './src/udesk'

let RXUdeskJS = UdeskJS;
let RXUdeskJSApi = UdeskJSApi;

let RXGetSignature = getSignature;
let RXQueryWithParams = queryWithParams;
let RXSha1 = sha1;

export default RXUdeskJS;

export {
  RXUdeskJS,
  RXUdeskJSApi,
  RXSha1,
  RXGetSignature,
  RXQueryWithParams,
};