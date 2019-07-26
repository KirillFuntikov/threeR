import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => ('Home!')}/>
            <Route path='/hello' render={() => <HelloWorld greeting={'Great catch'}/>}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
