export default (state = 'not search yet', action) => {
  switch (action.type) {
    case 'YOUTUBE_SEARCH_LOADING':
      return 'loading'
    case 'YOUTUBE_SEARCH_LOADED':
      return 'loaded'
    default:
      return state
  }
}