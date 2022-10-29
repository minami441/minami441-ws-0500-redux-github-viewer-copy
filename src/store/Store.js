import { createStore } from "redux";
import user from "./User.js";

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

let initialData = {
  data: {
    1: {
      id: 1,
      title: "A bug in Top Page",
      status: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ctuser: "",
      ctdate: getDate(),
      update: getDate(),
    },
    2: {
      id: 2,
      title: "A problem of performance in Top Page",
      status: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ctuser: "",
      ctdate: getDate(),
      update: getDate(),
    },
    3: {
      id: 3,
      title: "fix layout",
      status: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ctuser: "",
      ctdate: getDate(),
      update: getDate(),
    },
  },
};
initialData.index = Object.values(initialData.data).length;

const ISSUE_ACTION = {
  add: "addIssue",
  edit: "editIssue",
  delete: "deleteIssue",
};

const reducer = (state = initialData, action) => {
  const newState = { ...state, data: { ...state.data } };

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
