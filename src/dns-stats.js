const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const parts = domains.map((e) => e.split('.')).reduce((a, c) => {
    return a.concat(c.reduceRight((a1, c1, i) => {
      let last
      if (a1.length > 0) {
        last = a1[a1.length - 1]
      } else {
        last = '';
      }

      return a1.concat(last + '.' + c1)
    }, []));
  }, []).reduce((a, c) => {
      
    a[c] ? a[c] += 1 : a[c] = 1;
    return a;
  }, {});

  return parts;

}



module.exports = {
  getDNSStats
};
