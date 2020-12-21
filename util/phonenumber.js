const phonelib = require('google-libphonenumber')
const phoneUtil = phonelib.PhoneNumberUtil.getInstance()
const formats = phonelib.PhoneNumberFormat
const types = phonelib.PhoneNumberType

/**
 *  Parse a telephone number
 *
 * @param {string} phoneNumber - The phone number
 * @param {string} region="GB" - The region to parse the phone number
 * @returns {object} An object representing the parsed phone number
 */
function parsePhoneNumber (phoneNumber, region = 'GB') {
  const parsed = phoneUtil.parse(phoneNumber, region)
  // parseAndKeepRawInput
  const national = phoneUtil.format(parsed, formats.NATIONAL)
  const international = phoneUtil.format(parsed, formats.INTERNATIONAL)
  const e164 = phoneUtil.format(parsed, formats.E164)
  const type = phoneUtil.getNumberType(parsed)

  return {
    original: phoneNumber,
    national,
    international,
    e164,
    type
  }
}

module.exports = {
  parsePhoneNumber,
  phonelib,
  phoneUtil,
  formats,
  types
}
