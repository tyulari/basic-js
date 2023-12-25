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
  result = {};
  const dns = domains.map(el => el.split('.').reverse());
  //console.debug(dns);
  dns.map(function(el){
  let item = '';

    el.map((subEl) =>{
      item +=`.${subEl}`;
        if(!result[item]) {
          result[item] = 1;
        } else {
          result[item] += 1;
        }
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};
