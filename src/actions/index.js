let messageCounter = 0
export const setMessageOwner = counter => Math.floor(counter / 2) % 2 ? 'theirs' : 'yours'

export const addMessage = text => {
  const counter = messageCounter
  return {
    type: 'ADD_MESSAGE',
    id: messageCounter++,
    text,
    owner: setMessageOwner(counter)
  }
}
