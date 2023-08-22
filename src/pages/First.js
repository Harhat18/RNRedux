import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const First = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
  };
  return (
    <View>
      <Text>First</Text>
      <View
        style={{
          borderWidth: 1,
          padding: 5,
          margin: 10,
          borderColor: '#e0e0e0',
        }}>
        <TextInput value={text} onChangeText={setText} placeholder="İsim" />
      </View>
      <Button title="EKLE" onPress={handleAdd} />
    </View>
  );
};

export default First;
