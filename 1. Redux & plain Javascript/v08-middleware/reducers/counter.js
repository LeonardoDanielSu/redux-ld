function counter(currentState, action){
    var DEFAULT_STATE = {result:0, loading:false};
    var nextState = Object.assign({},currentState);
    if (currentState === undefined) { // look at to Note 1.1

        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {
      case 'DECREMENT': // look at Note2.1
        nextState.result = currentState.result - 1;
        return nextState;// Note2.2
      case 'INCREMENT': // look at Note2.1
        nextState.result = currentState.result + 1;
        nextState.loading = false;
        return nextState;// Note2.2
      case 'INCREMENT_LOADING': // look at Note2.1
        nextState.loading = true;
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}