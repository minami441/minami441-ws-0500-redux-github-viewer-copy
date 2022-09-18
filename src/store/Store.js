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
};

initialData = {
  index: Object.values(initialData).length,
  data: initialData,
};

const reducer = (state = initialData, action) => {
  let newState = {
    data: "",
  };
  const index = initialData.index + 1;
  switch (action.type) {
    case "add_issue":
      const { title, description } = action.payload || {};
      state.data[index] = {
        id: index,
        title: title,
        description: description,
        status: 0,
        ctuser: user.name,
        ctdate: getdate(),
        update: getdate(),
      };
      state.index++;
      newState = state;
      return newState;
    case "filter_issue":
      const greptxt = action.payload;
      newState.data = Object.values(state.data).filter(function (value) {
        return value.title.includes(greptxt);
      });
      return newState;
    case "edit_issue":
      const { id, textedit, descriptionedit, statusedit } = action.payload;
      initialData.data[id].title = textedit;
      initialData.data[id].description = descriptionedit;
      initialData.data[id].status = statusedit;
      return initialData;
    case "delete_issue":
      const delete_id = action.payload;
      delete_id.forEach((e) => delete initialData.data[e]);
      newState.data = Object.values(initialData.data);
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
