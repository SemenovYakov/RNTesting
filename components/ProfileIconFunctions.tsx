import ImagePicker from 'react-native-image-crop-picker';

export const takePhotoFromLibrary = (
  setImage: React.Dispatch<React.SetStateAction<string>>,
) => {
  ImagePicker.openPicker({}).then(item => {
    setImage(item.path);
  });
};

export const takePhotoFromCamera = (
  setImage: React.Dispatch<React.SetStateAction<string>>,
) => {
  ImagePicker.openCamera({
    cropping: false,
  }).then(item => {
    setImage(item.path);
  });
};
