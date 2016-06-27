// step 1.2
var store = Redux.createStore(combineReducer)
// ~end step 1.2
// step 1.3
      
function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('value2').innerHTML = state.sum;
};

store.subscribe(render);
// ~end step 1.3
render();

