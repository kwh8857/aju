import firebase from "firebase/app";
import "firebase/firestore";
const getEditor = () => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("editor")
      .get()
      .then((result) => {
        const res = result.docs.map((item) => {
          return item.id;
        });
        resolve(res);
      });
  });
};

export { getEditor };
