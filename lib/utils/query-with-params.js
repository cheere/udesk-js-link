
export default function queryWithParams(map) {
  let index = 0;
  let query = '';
  try {
    for (let key in map) {
      if (index > 0) query += '&';
      let value = map[key] || '';
      query += key;
      query += '=';
      query += value;
      index += 1;
    }
  } catch (error) {
    console.log('js-udesk-link -> queryWithParams -> (let key in map) error=>', error);
    query = '';
  }
  return query;
}
//# sourceMappingURL=query-with-params.js.map