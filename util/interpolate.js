/**
 * String interpolation for when literal interpolation can't be used
 * (e.g. when using tokens in env vars)
 * Replace tokens in a string with values
 * @param {string} string - string containing 0 or more {...} tokens
 * @param {object} params - object literal with key values for token replacement
 * @example
 * //return 'The dog said woof!'
 * interpolate('The {animal} said {sound}!', { animal: 'dog', sound: 'woof' })
 * @returns {string} Returns string with matching tokens substituted
 */
const interpolate = function (string, params) {
  return string.replace(/\${(\w+)}/g, (token, key) => params[key] || token)
}

module.exports = interpolate
