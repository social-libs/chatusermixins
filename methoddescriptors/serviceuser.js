module.exports = {
  acknowledgeChatNotification: [{
    title: 'Notification Object',
    type: 'object',
    required: ['affected', 'p2p'],
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
