import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from './components/Button.js';
import ImageViewer from './components/ImageViewer.js';
const placeholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [imgSelecionada, setImg] = useState(null);

 const pegarImagem = async()=> {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });
  if(!result.canceled){
    setImg(result.assets[0].uri);
  }else{
    alert('Você não selecionou uma imagem.');
  }
 };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

        <ImageViewer placeholderImageSource={placeholderImage}
        imgSelecionada={imgSelecionada}
        />

      </View>

      <View style={styles.footerContainer}>
        
        <Button theme="primary" label="Choose a photo" onPress={pegarImagem}/>
        <Button label="Use this photo"/>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
});
