import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CameraType, RNCamera} from 'react-native-camera';

const CameraScreen: React.FC = () => {
  const [cameraType] = React.useState<keyof CameraType>('back');
  const ref = React.useRef<RNCamera>(null);

  return (
    <View style={styles.Container}>
      <RNCamera ref={ref} type={cameraType} style={styles.Camera} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
  },
  Camera: {
    height: '100%',
    width: '100%',
  },
});

export default CameraScreen;
