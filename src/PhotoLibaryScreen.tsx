import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppPhotos, AppPhotosType} from './utils/AppPhotos';

const PhotoLibaryScreen = () => {
  const [photos, setPhotos] = React.useState<AppPhotosType.PhotosType[]>([]);

  async function getPhoto() {
    const res = await AppPhotos.getPhotos({first: 100});
    setPhotos(res.edges);
  }

  React.useEffect(() => {
    getPhoto();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View>
          <Text style={styles.Text}>{'Hello Photo Screen'}</Text>
        </View>
        <ScrollView>
          <View style={styles.ListImage}>
            {photos.map(item => (
              <View key={item.node.timestamp} style={styles.Img}>
                <Image
                  source={{uri: item.node.image.uri}}
                  style={styles.ImgDisplay}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  Text: {
    color: '#8AA',
  },
  ListImage: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Img: {
    width: '33.33%',
  },
  ImgDisplay: {
    width: '100%',
    paddingBottom: '100%',
  },
});

export default PhotoLibaryScreen;
