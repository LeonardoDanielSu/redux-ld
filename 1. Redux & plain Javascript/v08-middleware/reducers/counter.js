function counter(currentState, action){
    var DEFAULT_STATE = 0;
    if (currentState === undefined) { // look at to Note 1.1

        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {
      case 'DECREMENT': // look at Note2.1
        nextState = currentState - 1;
        return nextState;// Note2.2
      case 'INCREMENT': // look at Note2.1
        nextState = currentState + 1;
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}