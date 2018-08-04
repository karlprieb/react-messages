import messages from './messages'

describe('messages reducer', () => {
  it('should handle initial default state', () => {
    expect(
      messages(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_MESSAGE', () => {
    expect(
      messages([], {
        type: 'ADD_MESSAGE',
        id: 0,
        text: 'Example message',
        owner: 'yours'
      })
    ).toEqual([
      {
        id: 0,
        text: 'Example message',
        owner: 'yours'
      }
    ])

    expect(
      messages([
        {
          id: 0,
          text: 'Example message',
          owner: 'yours'
        }
      ], {
        type: 'ADD_MESSAGE',
        id: 1,
        text: 'Another message',
        owner: 'theirs'
      })
    ).toEqual([
      {
        id: 0,
        text: 'Example message',
        owner: 'yours'
      }, {
        id: 1,
        text: 'Another message',
        owner: 'theirs'
      }
    ])
  })
})
