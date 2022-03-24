const MAX_MESSAGE_HEADLINE_LENGTH = 90
const MAX_MESSAGE_BODY_LENGTH = 990

const ALERT_ISSUED = 'uk.gov.defra.xws.alert.issued'
const ALERT_PUBLISHED = 'uk.gov.defra.xws.alert.published'

const EVENTS = {
  alert: {
    issued: ALERT_ISSUED,
    published: ALERT_PUBLISHED
  },
  // notification: {
  //   alert: {
  //     created: 'notification.alert.created',
  //     published: 'notification.alert.published'
  //   },
  //   message: {
  //     created: 'notification.message.created'
  //   }
  // }
}

module.exports = {
  EVENTS,
  ALERT_ISSUED,
  ALERT_PUBLISHED,
  MAX_MESSAGE_HEADLINE_LENGTH,
  MAX_MESSAGE_BODY_LENGTH,
  DATE_FORMAT: 'DD/MM/YYYY HH:mm'
}
