import { createStore } from "redux";
import user from "./User.js";
import axios from "axios";

function getDate() {
  const date = new Date();
  const YYYY = date.getFullYear();
  var MM = date.getMonth() + 1;
  var DD = date.getDate();

  if (MM < 10) {
    MM = "0" + MM;
  }
  if (DD < 10) {
    DD = "0" + DD;
  }

  return MM + "-" + DD + "-" + YYYY;
}

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
      //const index = ++newState.index;
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
    case ISSUE_ACTION["edit"]:
      const { id, textEdit, descriptionEdit, statusEdit } = action.payload;
      newState.data[id].title = textEdit;
      newState.data[id].description = descriptionEdit;
      newState.data[id].status = statusEdit;
      return newState;
    case ISSUE_ACTION["delete"]:
      const delete_id = action.payload;
      delete_id.forEach((e) => delete newState.data[e]);
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
