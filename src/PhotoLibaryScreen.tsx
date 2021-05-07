import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const PhotoLibaryScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={styles.Text}>{'Hello Photo Screen'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    color: '#FFF',
    backgroundColor: '#B14',
  },
  Text: {
    color: '#FFF',
  },
});

export default PhotoLibaryScreen;
