import counter from './counter'
import images from './images'
import sum from './sum'

export default function combineReducer(currentState, action) {
    var nextState = {...currentState};
    return {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action),
        images: images(nextState.images, action)
    };
}

