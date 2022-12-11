import { createStore } from "redux";
import axios from "axios";

import { NotificationManager } from "react-notifications";

const ISSUE_ACTION = {
  add: "addIssue",
  edit: "editIssue",
  delete: "deleteIssue",
};
const url =
  "https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues";

const reducer = async (state, action) => {
  switch (action.type) {
    case ISSUE_ACTION["add"]:
      const { title, description } = action.payload || {};
      await axios({
        method: "POST",
        url: url,
        data: { title: title, body: description },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
        },
      })
        .then(() => {
          // handle succes
          NotificationManager.success("成功しました", "Success!", 2000);
        })
        .catch(() => {
          NotificationManager.error("失敗しました", "error!", 2000);
        });
      return;
    case ISSUE_ACTION["edit"]:
      const { number, textEdit, descriptionEdit, statusEdit } = action.payload;
      axios({
        method: "PATCH",
        url: `${url}/${number}`,
        data: { title: textEdit, body: descriptionEdit, state: statusEdit },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
        },
      })
        .then(() => {
          // handle succes
          NotificationManager.success("成功しました", "Success!", 2000);
        })
        .catch(() => {
          NotificationManager.error("失敗しました", "error!", 2000);
        });
      return;
    case ISSUE_ACTION["delete"]:
      const delete_num = action.payload;
      delete_num.forEach((number) =>
        axios({
          method: "PATCH",
          url: `${url}/${number}`,
          data: { state: "close" },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITAUTH}`,
          },
        })
      );
      return;
    default:
      return;
  }
};
const store = createStore(reducer);

export default store;
