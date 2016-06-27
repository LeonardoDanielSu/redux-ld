import {render} from 'react-dom'
import Examples from './components/Examples'
import store from './redux/store/config'
//import {decrease, getSum, getRandomImages} from './redux/actions/index'
import React from 'react'
import { Provider } from 'react-redux'

// function render(){
//   ReactDOM.render(
//     <Examples value = {store.getState()}
//       onDecrement = {() => store.dispatch(decrease())}
//       onSum = {(a,b)=> store.dispatch(getSum(a, b))}
//       onRandomImages = {() => store.dispatch(getRandomImages)}
//     />,
//     document.getElementById('root')  
//   )
// }
// render();

// store.subscribe(render);

render(
  <Provider store={store}>
    <Examples />
  </Provider>,
  document.getElementById('root')
)
