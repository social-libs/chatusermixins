module.exports = {
  acknowledgeChatNotification: [{
    title: 'Notification Object',
    type: 'object',
    required: ['affected', 'p2p'],
    properties: {
      affected: { type: 'array' },
      mids: { type: 'array' },
      lastm: {
        type: 'object',
        required: ['from', 'message', 'created']
      }
    }
  }]
}
