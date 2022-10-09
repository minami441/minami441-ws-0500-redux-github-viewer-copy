import { createStore } from "redux";
import user from "./User.js";

function getdate() {
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
      ctdate: getdate(),
      update: getdate(),
    },
    2: {
      id: 2,
      title: "A problem of performance in Top Page",
      status: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ctuser: "",
      ctdate: getdate(),
      update: getdate(),
    },
    3: {
      id: 3,
      title: "fix layout",
      status: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ctuser: "",
      ctdate: getdate(),
      update: getdate(),
    },
  },
};
initialData.index = Object.values(initialData.data).length;

const reducer = (state = initialData, action) => {
  let newState = {
    data: "",
  };

  switch (action.type) {
    case "add_issue":
      const index = ++state.index;
      const { title, description } = action.payload || {};
      newState = state;
      newState.data[index] = {
        id: index,
        title: title,
        description: description,
        status: 0,
        ctuser: user.name,
        ctdate: getdate(),
        update: getdate(),
      };
      return newState;
    case "edit_issue":
      const { id, textedit, descriptionedit, statusedit } = action.payload;
      newState = state;
      newState.data[id].title = textedit;
      newState.data[id].description = descriptionedit;
      newState.data[id].status = statusedit;
      return newState;
    case "delete_issue":
      const delete_id = action.payload;
      newState = state;
      delete_id.forEach((e) => delete newState.data[e]);
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
