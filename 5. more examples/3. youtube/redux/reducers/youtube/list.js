export default (state = [], action) => {
  switch (action.type) {
    case 'YOUTUBE_SEARCH_LOADED':
      return action.list
    default:
      return state
  }
}
