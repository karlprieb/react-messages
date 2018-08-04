const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const { id, text, owner } = action

      return [
        ...state,
        {
          id,
          text,
          owner
        }
      ]

    default:
      return state
  }
}

export default messages
