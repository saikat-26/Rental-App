/* eslint-disable prettier/prettier */
import React from 'react';
import First from './First';
import Car from './Car';
import Bike from './Bike';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {View} from 'react-native';

function Navigate() {
  return (
    <NativeRouter>
      <View>
      <Routes>
      <Route exact path="/" element={<First />} />
      <Route path="/car" element={<Car />} />
      <Route path="/bike" element={<Bike />} />
      </Routes>
      </View>
    </NativeRouter>
  );
}
export default Navigate;