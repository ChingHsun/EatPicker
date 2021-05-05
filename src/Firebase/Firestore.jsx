import firebase from "./firebase-config.js";
import { addFile } from "./Storage.jsx";
export const db = firebase.firestore();

export const getFirestoreDoc = (document) => {
  db.collection("test")
    .doc(document)
    .get()
    .then((doc) => {
      console.log("d", doc.data());
    });
};
export const getFirestoreCollection = (collection) => {
  return db
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          docData: doc.data(),
        };
      });
    });
};
export const addFirestoreDoc = (data, collection, document) => {
  if (document) {
    console.log("set");
  } else {
    console.log("add", data);

    return db
      .collection(collection)
      .add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        return error;
      });
  }
};

export const addImgInFireStore = async (data, collection) => {
  const fileUrl = await addFile(data.img, collection);
  console.log("fileUrl", fileUrl);
  const response = await addFirestoreDoc({ ...data, img: fileUrl }, "places");
  return response;
};
