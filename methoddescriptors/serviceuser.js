module.exports = {
  acknowledgeChatNotification: [{
    title: 'Notification Object',
    type: 'object',
    required: ['affected', 'mids', 'lastmessage'],
    properties: {
      affected: { type: 'array' },
      mids: { type: 'array' },
      lastmessage: {
        type: 'object',
        required: ['from', 'message', 'created', 'seen']
      }
    }
  }]
}
