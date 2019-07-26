import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
  things: [
    {
      name: 'asd',
      guid: 'hhsdf5f9sfb2jd7f'
    }
  ]
};

function rootReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return {things: action.json.things};
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

  return store;
}
