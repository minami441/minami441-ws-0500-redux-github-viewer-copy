import { createStore } from 'redux';
import user from './user.js';

function getdate(){
  const date = new Date();
  const YYYY = date.getFullYear();
  var MM = date.getMonth()+1;
  var DD = date.getDate();
  
  if(MM <10){
    MM = "0" + MM;
  }
  if(DD < 10){
    DD = "0" + DD;
  }

  return MM + "-" + DD + "-" + YYYY;
}

let initialData = {
     1:{
      id: 1,
      title: 'A bug in Top Page',
      status: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ctuser: '',
      ctdate: getdate(),
      update: getdate(),
    },
    2:{
      id: 2,
      title: 'A problem of performance in Top Page',
      status: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ctuser: '',
      ctdate: getdate(),
      update: getdate(),
    },
    3:{
      id: 3,
      title: 'fix layout',
      status: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ctuser: '',
      ctdate: getdate(),
      update: getdate(),
  }
};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData
}

const reducer = (state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case 'add_issue':
      const { title, description } = action.payload || {}
      initialState.index++
      initialState.data[initialState.index] = { id: initialState.index, title: title,description:description, status: 0, ctuser: user.name, ctdate: getdate(), update: getdate()};
      return initialState;
    case 'filter_issue':
      const greptxt = action.payload
      newState.data = Object.values(initialData).filter( function( value ) {
        return value.title.includes(greptxt)
      })
      return newState;
    case 'edit_issue':
      const { id,textedit, descriptionedit,statusedit } = action.payload
      initialState.data[id].title = textedit
      initialState.data[id].description = descriptionedit
      initialState.data[id].status = statusedit
      return initialState
    case 'delete_issue':
      const delete_id = action.payload
      newState.data = Object.values(newState.data).filter(function(value) {
        return delete_id.indexOf(String(value.id)) === -1
      });
      return newState
    default:
    return state;
  }
};

const store = createStore(reducer);

export default store;
