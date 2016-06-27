
export const decrease = () =>  ({ type: 'DECREMENT' });

export const getSum = (a, b) => ({ type: 'SUM', a:a, b:b });

export const getRandomImages = (dispatch, state) => {
  dispatch({ type: 'IMAGES_LOADING' });
  var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  $.getJSON(imgurAPI).done(data =>
    dispatch({ type: 'IMAGES', data:data.data}))
}
