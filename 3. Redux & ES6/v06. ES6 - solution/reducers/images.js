function images(currentState, action){
    var DEFAULT_STATE = {data:[], loading:"Please click the 'Random Images' button"};
    var nextState = Object.assign({},currentState);
    if (currentState === undefined) { // look at to Note 1.1

        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {
      case 'IMAGES': // look at Note2.1
        nextState.data = action.data
        nextState.loading = "loaded";
        return nextState;// Note2.2
      case 'IMAGES_LOADING': // look at Note2.1
        nextState.loading = "loading...";
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}
