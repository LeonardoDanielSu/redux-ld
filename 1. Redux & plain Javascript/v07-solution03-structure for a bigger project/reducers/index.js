// step 2.2

function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);
    nextState = {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    return nextState;
}

//~end step 2.2