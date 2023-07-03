import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {GraphIcon} from '../icons';
import LottieView from 'lottie-react-native';
const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.heading}>Enhnace your stock growth strategy</Text>
        {/* <GraphIcon color="#000" size={40} /> */}
      </View>
      <LottieView
        style={styles.ImageBox}
        source={require('../assets/animations/graphRise.json')}
        autoPlay
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3F36A',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    padding: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ImageBox: {
    width: 400,
    height: 400,
  },
});
