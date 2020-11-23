import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  FlatList,
  TouchableOpacity, 
  Image 
} from 'react-native';
import {ActionSheet, Root} from "native-base";
import ImagePicker from 'react-native-image-crop-picker';

const width = Dimensions.get('window').width;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }

  onSelectedImage = (images) => {
      let newDataImg = this.state.fileList;

    images.map((image) => {
      const source = {uri: image.path};
      let item = {
        id: Date.now(),
        mime: image.mime,
        data: image.data
      };
      newDataImg.push(item);
    })
    this.setState({fileList: newDataImg})
  };

  choosePhotoFromLibrary = () =>  {
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true
    }).then(images => {
      this.onSelectedImage(images);
      console.log(images);
    });
  };

  onClickAddImage = () => {
    const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Select Photo'
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 1:
            this.choosePhotoFromLibrary();
            break;
          default:
            break;
        }
      }
    )
  };

  renderItem = ({item, index}) => {
    let {itemViewImage, itemImage} = styles;
    return (
      <View style={itemViewImage}>
        <Image source={{uri: `data:${item.mime};base64,${item.data}`}} style={itemImage}/>
      </View>
    )
  };

  render() {
    let {content, btnPressStyle, txtStyle} = styles;
    let {fileList} = this.state;
    return (
      <Root>
        <View style={content}>
          <Text>React Native Add Image</Text>
          <FlatList
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />

          <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
            <Text style={txtStyle}>Press Add Image</Text>
          </TouchableOpacity>
        </View>
      </Root>  
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  btnPressStyle: {
    backgroundColor: '#0080ff',
    height: 50,
    width: width -60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    color: '#ffffff',
  },
  itemImage: {
    backgroundColor: '#a9edf5',
    height: 150,
    width: width - 60,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  itemViewImage: {
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  }
});