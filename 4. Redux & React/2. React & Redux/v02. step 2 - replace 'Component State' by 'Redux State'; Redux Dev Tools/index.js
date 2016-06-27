import ReactDOM from 'react-dom'
import Examples from './components/Examples'
import store from './redux/store/config'
import {decrease, getSum, getRandomImages} from './redux/actions/index'
import React from 'react'

function render(){
  ReactDOM.render(
    <Examples value = {store.getState()}
      onDerement = {() => store.dispatch(decrease())}
      onSum = {(a,b)=> store.dispatch(getSum(a, b))}
      onRandomImages = {() => store.dispatch(getRandomImages)}
    />,
    document.getElementById('root')  
  )
}
render();

store.subscribe(render);