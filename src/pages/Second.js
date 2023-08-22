import {View, Text, FlatList, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const Second = () => {
  const list = useSelector(state => state.nameList);
  const dispatch = useDispatch();
  const handleClean = () => {
    dispatch({type: 'CLEAN_LIST'});
  };
  return (
    <View>
      <Text>Second</Text>
      <FlatList data={list} renderItem={({item}) => <Text>{item}</Text>} />
      <Button title="TEMİZLE" onPress={handleClean} />
    </View>
  );
};

export default Second;
