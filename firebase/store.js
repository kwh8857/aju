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
          const { timestamp, state } = item.data();
          return `${state}-${timestamp}`;
        });
        resolve(res);
      });
  });
};
const getDetail = (timestamp) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("editor")
      .where("timestamp", "==", parseInt(timestamp))
      .get()
      .then((res) => {
        res.forEach((item) => {
          resolve(item.data());
        });
      });
  });
};
const getPrt = () => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("editor")
      .where("state", "==", "portfolio")
      .get()
      .then((res) => {
        const value = res.docs
          .map((item) => {
            const value = item.data();
            return {
              title: value.title,
              sub: value.sub,
              timestamp: value.timestamp,
              image: value.mainimg,
            };
          })
          .sort((a, b) => b.timestamp - a.timestamp);
        resolve(value);
      });
  });
};
const getMain = () => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("editor")
      .get()
      .then((result) => {
        let notice = [];
        let prt = [];
        result.docs.forEach((item) => {
          const value = item.data();
          if (value.state === "notice") {
            notice.push(value);
          } else {
            prt.push({
              title: value.title,
              image: value.mainimg,
              timestamp: value.timestamp,
              state: value.state,
            });
          }
        });
        const noticeFilt = notice
          .sort((a, b) => b.timestamp - a.timestamp)
          .splice(0, 5);
        const prtFilt = prt
          .sort((a, b) => b.timestamp - a.timestamp)
          .splice(0, 5);
        resolve({ notice: noticeFilt, prt: prtFilt });
      });
  });
};
export { getEditor, getMain, getPrt, getDetail };
