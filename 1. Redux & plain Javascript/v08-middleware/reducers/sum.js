function sum(currentState, action){
    var DEFAULT_STATE = 3;
    if (currentState === undefined) { // look at to Note 1.1
        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {

      case 'SUM': // look at Note2.1
        nextState = parseInt(action.a) + parseInt(action.b);
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}