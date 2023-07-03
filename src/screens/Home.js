import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Home = () => {
  const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/72850994?v=4';
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 20,
        }}>
        <View>
          <Text style={styles.text}>Welcome Back,</Text>
          <Text style={styles.heading}>Maida Afzal</Text>
        </View>
        <View>
          <Image
            source={{uri: PROFILE_IMAGE}}
            style={{width: 50, height: 50, borderRadius: 50 / 2}}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    paddingTop: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
});
