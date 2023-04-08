import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.background}>
      <View style={styles.box1}>
        <Image 
        style={styles.imageStyle}
        source={{uri:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}}
        />
      </View>
      <View style={styles.box2}>
        <Text style={styles.textRightSide1}>
          20520447
        </Text>
        <Text style={styles.textRightSide1}>
          Student
        </Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.textBottomSide1}>
          Phone: 09xxxxxxxx
        </Text>
        <Text style={styles.textBottomSide1}>
          Email: 20520447@gm.uit.edu.vn
        </Text>
      </View>
    </View>
  );
};

export default HelloWorldApp;

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: 'rgb(99,177,208)', 
    width: 400, 
    height: 400
  },
  box1: {
    width: 120,
    height: 90,
    backgroundColor: 'rgb(29,171,156)',
    justifyContent: 'center',
    padding: 40,
    marginLeft: 60,
    marginTop: 220,
  },
  box2: {
    width: 120,
    height: 90,
    backgroundColor: 'rgb(29,171,156)',
    justifyContent: 'center',
    padding: 40,
    marginLeft: 180,
    marginTop: -90
  },
  box3: {
    width: 240,
    height: 90,
    backgroundColor: 'rgb(29,171,156)',
    justifyContent: 'center',
    padding: 40,
    marginLeft: 60
  },
  boxStyle: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  textRightSide1: {
    width: 75,
    height: 20,
    fontSize: 15,
    color: 'white',
    marginLeft: -30
  },
  textBottomSide1: {
    width: 200,
    height: 20,
    fontSize: 13,
    color: 'white',
    marginLeft: -20
  },
  imageStyle: {
    width: 90,
    height: 80,
    marginStart: -25,
  }
});