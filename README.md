# Mobile_app_upload_image(react native)

## Result

<p align="left">
  <img width="170" alt="Screen Shot 2020-11-23 at 16 08 51" src="https://user-images.githubusercontent.com/61397899/99949183-34998300-2dad-11eb-91ff-430b52b0da0b.png">
  <img width="170" alt="Screen Shot 2020-11-23 at 16 09 00" src="https://user-images.githubusercontent.com/61397899/99949192-36fbdd00-2dad-11eb-9d76-06d324d7783d.png">
  <img width="170" alt="Screen Shot 2020-11-23 at 16 09 07" src="https://user-images.githubusercontent.com/61397899/99949199-395e3700-2dad-11eb-9637-44d03df8d52b.png">
  <img width="170" alt="Screen Shot 2020-11-23 at 16 09 15" src="https://user-images.githubusercontent.com/61397899/99949204-39f6cd80-2dad-11eb-9407-e1f31b8a58dd.png">
  <img width="170" alt="Screen Shot 2020-11-23 at 16 09 24" src="https://user-images.githubusercontent.com/61397899/99949207-3b27fa80-2dad-11eb-9304-08d2cb99cf80.png">
</p>

## Usage

Import library

```javascript
import ImagePicker from 'react-native-image-crop-picker';
```
### Select from gallery

Call multiple image picker

```javascript
ImagePicker.openPicker({
  multiple: true
}).then(images => {
  console.log(images);
});
```

# Install

## Step 1

```bash
npm i react-native-image-crop-picker --save
```

## Step 2

### iOS

```bash
cd ios
pod install
```
