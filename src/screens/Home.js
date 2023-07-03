import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {SearchIcon} from '../icons';
import Spacer from '../components/Spacer';
const Home = () => {
  const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/72850994?v=4';
  const data = [
    {id: '1', title: 'Review', description: 'Verification in progress'},
    {id: '2', title: 'Review', description: 'Verification in progress'},
    {id: '3', title: 'Review', description: 'Verification in progress'},
    {id: '4', title: 'Review', description: 'Verification in progress'},
    {id: '5', title: 'Review', description: 'Verification in progress'},
  ];
  const dataFlow = [
    {id: '1', title: 'Review', description: 'Verification in progress'},
    {id: '2', title: 'Review', description: 'Verification in progress'},
    {id: '3', title: 'Review', description: 'Verification in progress'},
    {id: '4', title: 'Review', description: 'Verification in progress'},
  ];
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View
        style={{
          backgroundColor: '#F6F6F0',
          borderRadius: 10,
          paddingVertical: 10,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.textSmall}>{item.title}</Text>
      </View>
      <Spacer top={30} />
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
  const flowList = ({item}) => (
    <View style={styles.itemFlow}>
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
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
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 50,
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 20,
          borderColor: '#eaeaea',
          borderWidth: 1,
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Search</Text>
      </View>
      <Spacer top={40} />
      <View style={styles.normalView}>
        <Text style={styles.heading}>Task-based{'\n'}explanation process</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.normalView}>
        <Text style={styles.heading}>Flows List</Text>
        <FlatList
          data={dataFlow}
          renderItem={flowList}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    paddingTop: 70,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 20,
    width: 150,
    height: 150,
  },
  itemFlow: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 20,
    width: '90%',
    height: 70,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  normalView: {
    width: '100%',
    padding: 20,
  },
  textSmall: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});
