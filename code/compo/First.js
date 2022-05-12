/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Link} from 'react-router-native';

const First = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <Text style={styles.message}>What would you like to book?</Text>
      <View style={styles.body}>
        <TouchableOpacity>
          <Link to="/car"><Image source={require('../assets/car0.jpg')} style={styles.img} /></Link>
        </TouchableOpacity>
        <TouchableOpacity>
        <Link to="/bike"><Image source={require('../assets/bike0.jpg')} style={styles.img} /></Link>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.foot}>
        <Text style={styles.text}>Need Help?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },
  head: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 60,
  },
  message: {
    textAlign: 'center',
    marginTop: 38,
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    margin: 30,
    padding: 30,
  },
  body: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  foot: {
    backgroundColor: 'green',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 5,
  },
});

export default First;
