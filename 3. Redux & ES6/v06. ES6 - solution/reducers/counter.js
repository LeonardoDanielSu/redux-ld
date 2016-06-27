function counter(state = {result:0, loading:false}, action){
    switch (action.type) {
      case 'DECREMENT':
        return  Object.assign({},state,
          {result: state.result - 1});
      case 'INCREMENT':
        return Object.assign({},state,
          {result: state.result + 1,
            loading: false
          });
      case 'INCREMENT_LOADING':
        return Object.assign({},state,
          {
            loading: true
          });
      default:
        return state;
    }
}
