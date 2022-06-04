import styled from 'styled-components';
import Newbutton from '../atoms/newbuton';
import Deletebutton from '../atoms/deletebutton';
import { connect } from 'react-redux';
import React from 'react';

const ActionButton = styled.div`
    display: flex;
`;

const ActionButtons = (delete_issue) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const Deleteissue = () => {

    }

    return(
    <ActionButton>
        <Newbutton onClick={() => setIsOpen(true)}>New</Newbutton>
        <Deletebutton onClick={() => Deleteissue()}>Delete</Deletebutton>
    </ActionButton>
    )
}

const mapStateToProps = () => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      delete_issue: (list) => dispatch({ type: 'delete_issue', payload: list }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons,);
  