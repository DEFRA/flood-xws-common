const publisher = {
  id: '92895119-cb53-4012-8eb9-173a22f2db7a',
  name: 'Environment Agency',
  url: 'www.gov.uk/environment-agency'
}

const service = {
  id: 'ecbb79cc-47f5-4bb0-ad0c-ca803b671cfb',
  name: 'XWS',
  description: 'Flood warning service'
}

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
  publisher,
  service,
  EVENTS,
  ALERT_ISSUED,
  ALERT_PUBLISHED,
  MAX_MESSAGE_HEADLINE_LENGTH,
  MAX_MESSAGE_BODY_LENGTH,
  DATE_FORMAT: 'DD/MM/YYYY HH:mm'
}
