import { createStore } from "redux";
import user from "./User.js";
import axios from "axios";

const ISSUE_ACTION = {
  add: "addIssue",
  edit: "editIssue",
  delete: "deleteIssue",
};

let initialData = {};

const reducer = (state = initialData, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ISSUE_ACTION["add"]:
      const { title, description } = action.payload || {};
      axios({
        method: "POST",
        url: "https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues",
        data: { title: title, body: description },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
        },
      })
        .then((res) => {
          return res.data; // レスポンスデータ
        })
        .catch((error) => {
          console.log("error: " + error);
        });
      return newState;
    case ISSUE_ACTION["edit"]:
      const { number, textEdit, descriptionEdit, statusEdit } = action.payload;
      axios({
        method: "PATCH",
        url: `https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues/${number}`,
        data: { title: textEdit, body: descriptionEdit, state: statusEdit },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
        },
      })
        .then((res) => {
          console.log(res.status); // ステータスコード
          console.log(res.data); // レスポンスデータ
          console.log(res.statusText); // ステータスメッセージ
          console.log(res.headers); // レスポンスヘッダー
          console.log(res.config); // 設定
        })
        .catch((error) => {
          console.log("error: " + error);
        });
      return newState;
    case ISSUE_ACTION["delete"]:
      const delete_num = action.payload;
      delete_num.forEach((number) =>
        axios({
          method: "PATCH",
          url: `https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues/${number}`,
          data: { state: "close" },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
          },
        })
          .then((res) => {
            console.log(res.data); // レスポンスデータ
          })
          .catch((error) => {
            console.log("error: " + error);
          })
      );
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
