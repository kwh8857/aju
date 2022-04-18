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
const updateHit = (timestamp) => {
  firebase
    .firestore()
    .collection("editor")
    .where("timestamp", "==", parseInt(timestamp))
    .get()
    .then((res) => {
      res.forEach((item) => {
        const { hit } = item.data();
        item.ref.update({
          hit: hit ? hit + 1 : 1,
        });
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
              kind: value.kind,
              year: value.year,
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
      .then(async (result) => {
        let notice = [];
        let prt = [];
        await result.docs.forEach((item) => {
          const value = item.data();
          if (value.state === "notice") {
            if (value.template) {
              notice.push(value);
            }
          } else {
            if (value.template) {
              prt.push({
                title: value.title ? value.title : "",
                image: value.mainimg ? value.mainimg : "",
                timestamp: value.timestamp ? value.timestamp : "",
                state: value.state ? value.state : "",
              });
            }
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
const getNotice = () => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("editor")
      .get()
      .then(async (result) => {
        let notice = [];
        await result.docs.forEach((item) => {
          const value = item.data();
          if (value.state === "notice" && value.template) {
            notice.push({
              title: value.title ? value.title : "",
              timestamp: value.timestamp,
            });
          }
        });
        const noticeFilt = notice.sort((a, b) => b.timestamp - a.timestamp);
        const insertIndex = noticeFilt.map((item, idx) => {
          return Object.assign(item, { index: idx });
        });

        resolve(insertIndex);
      });
  });
};
export { getEditor, getMain, getPrt, getDetail, getNotice, updateHit };
