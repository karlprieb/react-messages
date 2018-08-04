import {addMessage, setMessageOwner} from './index'

describe('addMessage action', () => {
  it('addMessage should create ADD_MESSAGE action', () => {
    expect(addMessage('Another test message.'))
      .toEqual({
        type: 'ADD_MESSAGE',
        id: 0,
        text: 'Another test message.',
        owner: 'yours'
      })
  })

  it('setMessageOwner should return yours or theirs string on every two numbers starting with 0', () => {
    expect(setMessageOwner(0)).toEqual('yours')
    expect(setMessageOwner(1)).toEqual('yours')
    expect(setMessageOwner(2)).toEqual('theirs')
    expect(setMessageOwner(3)).toEqual('theirs')
    expect(setMessageOwner(4)).toEqual('yours')
  })
})
