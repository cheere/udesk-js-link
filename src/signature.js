
import UdeskJSApi from '../services/udesk-js-api'
import {sha1} from '../utils/encryption/sha1'
import queryWithParams from '../utils/query-with-params'

export default function getSignature(id) {
  let now = new Date().getTime();

  let nonce = (now * 2) + '';
  let timestamp = now + '';
  let web_token = id || '';
  let im_user_key = UdeskJSApi.im_user_key;
  if (process.env.NODE_ENV === 'development') {
    console.log('im_user_key=>', im_user_key);
  }

  let signs = {nonce, timestamp, web_token}

  let sign_str = queryWithParams(signs)
  sign_str += '&' + im_user_key;
  
  let signature = sha1(sign_str);
  if (signature && typeof signature == 'string') {
    signature = signature.toUpperCase();
  }
  else {
    signature = ''
    console.log('ud_signature -> signature fail fail')
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('ud_signatureMinin() =>', nonce, timestamp, web_token, signature)
  }
  return {nonce, timestamp, web_token, signature, im_user_key};
}