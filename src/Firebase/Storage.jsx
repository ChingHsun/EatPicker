import firebase from "./firebase-config.js";
export const storage = firebase.storage();

export const addFile = async (file, path) => {
  try {
    const filename = new Date().getTime();
    const fileRef = storage.ref().child(`${path}/${filename}`);
    const miniFile = await miniImg("500", "300", file);
    await fileRef.putString(miniFile, "data_url");
    const response = await fileRef.getDownloadURL();
    return response;
  } catch (err) {
    return err;
  }
};

const miniImg = (w, h, file) => {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var image = new Image();
  //blob
  image.src = URL.createObjectURL(file);

  return new Promise((resolve) => {
    image.onload = function () {
      canvas.width = w;
      canvas.height = h;
      context.drawImage(image, 0, 0, w, h);
      const result = canvas.toDataURL("image/png", 0.7);
      resolve(result);
    };
  });
};
