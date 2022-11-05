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

const url =
  "https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues";

let initialData = {};

function initData() {
  axios
    .get(url)
    .then((res) => {
      const items = res.data;
      for (const item of items) {
        initialData[item.number] = {
          id: item.number,
          title: item.title,
          status: item.state,
          description: item.body,
          url: item.html_url,
          ctuser: "jjoo",
          ctdate: item.created_at,
          update: item.updated_at,
        };
      }
    })
    .catch((error) => {
      const { status, statusText } = error.response;
      console.log(`Error! HTTP Status: ${status} ${statusText}`);
    });
}

initData();

const reducer = (state = initialData, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ISSUE_ACTION["add"]:
      const index = ++newState.index;
      const { title, description } = action.payload || {};
      newState.data[index] = {
        id: index,
        title: title,
        description: description,
        status: 0,
        ctuser: user.name,
        ctdate: getDate(),
        update: getDate(),
      };
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
