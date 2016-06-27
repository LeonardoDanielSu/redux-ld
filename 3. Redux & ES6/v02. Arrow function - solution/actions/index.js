
var decrease = () =>  ({ type: 'DECREMENT' });
var increase = () => ({ type: 'INCREMENT' });
var getSum = (a, b) => ({ type: 'SUM', a:a, b:b });

// ASYNC
var asyncIncrease = (dispatch, state) => {
    dispatch({type:"INCREMENT_LOADING"});
    _fakeServerApi.increaseCount(state.count.result,
        data => dispatch({ type: 'INCREMENT' }));
}

var getRandomImages = (dispatch, state) => {
  dispatch({ type: 'IMAGES_LOADING' });
  var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  $.getJSON(imgurAPI).done(data =>
    dispatch({ type: 'IMAGES', data:data.data}))
}
