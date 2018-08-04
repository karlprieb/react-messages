let messageCounter = 0
export const setMessageOwner = counter => Math.floor(counter / 2) % 2 ? 'theirs' : 'yours'

export const addMessage = text => ({
  type: 'ADD_MESSAGE',
  id: messageCounter++,
  text,
  owner: setMessageOwner(messageCounter)
})
