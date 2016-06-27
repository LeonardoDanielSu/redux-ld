import {render} from 'react-dom'
import Examples from './components/Examples'
import store from './redux/store/config'
import React from 'react'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <Examples />
  </Provider>,
  document.getElementById('root')
)
