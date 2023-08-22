import {View, Text, Button} from 'react-native';
import React from 'react';
import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};

    default:
      return state;
  }
}

const App = () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View style={{flex: 1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

const First = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize: 30, color: 'blue'}}>First {counter} </Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(state => state.counter);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30}}>Second {counter}</Text>
    </View>
  );
};

export default App;
