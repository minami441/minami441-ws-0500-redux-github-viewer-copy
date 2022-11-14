import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Buttons from "../atoms/Button.js";
import StatusBlock from "../molecules/StatusBlock";
import InHeaders from "../organisms/InHeader";
import IssueTr from "../organisms/IssueTr";
import LabelText from "../atoms/LabelText";
import TextBlock from "../molecules/InputBlock";
import TextareaBlock from "../molecules/TextareaBlock";
import Alert from "../molecules/AlertBlock";

const Section = styled.div`
  padding: 16px;
`;

const Container = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const Action = styled.div``;

const Lists = styled.div`
  overflow: scroll;
`;

const IssueTable = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;

  th:first-child,
  td:first-child {
    min-width: auto;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid rgb(225, 228, 232);
  }
`;

const ModalLabel = styled.div`
  max-width: 598px;
  margin: auto;
  textarea {
    min-height: 150px;
  }
  a {
    width: auto;
  }
`;

const ModalContents = styled.div`
  padding: 32px 0px 16px;
`;

const ModalButtons = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 8px;
`;

const GlobalStyle = createGlobalStyle`
  @media (max-width: 576px) {
    .ReactModal__Content {
      width: 100%;
      right: 0px !important;
      left: 0px !important;
    }
  }
  .ReactModal__Content {
    margin: auto;
    width: 60%;
  }
`;

const customStyles = {
  content: {
    position: "absolute",
    inset: "40px",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(255, 255, 255)",
    overflow: "auto",
    borderradius: "4px",
    outline: "none",
    padding: "20px",
  },
};

function Issue({ issue, addIssue, editIssue, deleteIssue }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = React.useState(false);
  const [text, setText] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [vals, setVal] = React.useState("");
  const [textEdit, setTextEdit] = React.useState("");
  const [descriptionEdit, setDescriptionEdit] = React.useState("");
  const [statusEdit, setStatusEdit] = React.useState("");
  const [error, setError] = React.useState("");
  const [check, setCheck] = React.useState([]);
  const [filTxt, setFilTxt] = React.useState();
  const [list, setList] = React.useState([]);
  const [master, setMaster] = React.useState([]);

  useEffect(() => {
    const url =
      "https://api.github.com/repos/minami441/minami441-ws-0500-redux-github-viewer/issues";
    axios.get(url).then(function (response) {
      setList(response.data);
      setMaster(response.data);
    });
  }, []);
  console.log(list);
  useEffect(() => {
    const tmp = master.filter((value) => value.title.includes(filTxt));
    setList(tmp);
  }, [filTxt]);

  const filter = (filter) => {
    setFilTxt(filter);
  };

  const delete_list = () => {
    const checkSaveFlg = window.confirm("削除しますか？");

    if (checkSaveFlg) {
      deleteIssue(check);
      setCheck([]);
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = () => {
    if (!text) {
      setError({ message: "タイトル" });
      return;
    }
    if (!description) {
      setError({ message: "説明" });
      return;
    }
    addIssue({ title: text, description: description });
    setError("");
    setText("");
    setDescription("");
    setIsOpen(false);
  };

  const onSubmitEdit = () => {
    if (!textEdit) {
      setError({ message: "タイトル" });
      return;
    }
    if (!descriptionEdit) {
      setError({ message: "説明" });
      return;
    }
    editIssue({
      number: vals.number,
      textEdit: textEdit,
      descriptionEdit: descriptionEdit,
      statusEdit: statusEdit,
    });
    setError("");
    setIsOpenEdit(false);
  };

  const openEdit = (val) => {
    setIsOpenEdit(true);
    setVal(val);
    setTextEdit(val.title);
    setDescriptionEdit(val.body);
    setStatusEdit(val.state);
  };

  const closeModal = () => {
    setText("");
    setDescription("");
    setError("");
    setIsOpen(false);
  };

  const closeModalEdit = () => {
    setError("");
    setIsOpenEdit(false);
  };

  const checkedBox = (e) => {
    e.stopPropagation();
    const { number, checked } = e.target;
    setCheck([...check, number]);
    if (!checked) {
      setCheck(check.filter((item) => item !== number));
    }
  };

  const allChecked = () => {
    if (check.length === list.length) {
      setCheck([]);
    } else {
      const tmp = list.map(function (val) {
        return val.number.toString();
      });
      setCheck(tmp);
    }
  };

  const statusOptions = [
    {
      label: "Open",
      value: "0",
    },
    {
      label: "Close",
      value: "1",
    },
  ];

  return (
    <Section>
      <Container>
        <Action>
          <InHeaders
            open={() => setIsOpen(true)}
            delete={() => delete_list()}
            filter={(e) => filter(e.target.value)}
          />
        </Action>
        <Lists>
          <IssueTable>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onChange={allChecked} />
                </th>
                <th></th>
                <th>ステータス</th>
                <th>作成者</th>
                <th>作成日付</th>
                <th>更新日付</th>
              </tr>
            </thead>
            <React.Fragment>
              <GlobalStyle />
            </React.Fragment>

            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <ModalLabel>
                <LabelText>Issueを追加</LabelText>
                <ModalContents>
                  <TextBlock
                    valid="textarea"
                    label="タイトル"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="タイトルを入力してください"
                  />
                  <TextareaBlock
                    label="説明"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="説明を入力してください"
                  />
                </ModalContents>
                <Alert error={error} />
                <ModalButtons>
                  <Buttons success onClick={() => onSubmit()}>
                    作成
                  </Buttons>
                  <Buttons onClick={closeModal}>閉じる</Buttons>
                </ModalButtons>
              </ModalLabel>
            </Modal>

            <Modal
              isOpen={modalIsOpenEdit}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <ModalLabel>
                <LabelText>Issueを追加</LabelText>
                <ModalContents>
                  <TextBlock
                    label="タイトル"
                    default={vals.title}
                    onChange={(e) => setTextEdit(e.target.value)}
                    placeholder="タイトルを入力してください"
                  />
                  <TextareaBlock
                    label="説明"
                    default={vals.body}
                    onChange={(e) => setDescriptionEdit(e.target.value)}
                    placeholder="説明を入力してください"
                  />
                  <StatusBlock
                    label="ステータス"
                    onChange={(e) => setStatusEdit(e.target.value)}
                    default={vals.state}
                    options={statusOptions}
                  />
                </ModalContents>
                <Alert error={error} />
                <ModalButtons>
                  <Buttons success onClick={() => onSubmitEdit()}>
                    更新
                  </Buttons>
                  <Buttons onClick={() => closeModalEdit()}>閉じる</Buttons>
                </ModalButtons>
              </ModalLabel>
            </Modal>
            <tbody>
              {list.map((val, key) => (
                <IssueTr
                  key={key}
                  val={val}
                  openEdit={() => openEdit(val)}
                  checkedBox={checkedBox}
                  checked={check.includes(val.number.toString())}
                />
              ))}
              {!list[0] && (
                <tr>
                  <td colSpan="6">データがありません</td>
                </tr>
              )}
            </tbody>
          </IssueTable>
        </Lists>
      </Container>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return { issue: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIssue: (list) => dispatch({ type: "addIssue", payload: list }),
    editIssue: (edittxt) => dispatch({ type: "editIssue", payload: edittxt }),
    deleteIssue: (list) => dispatch({ type: "deleteIssue", payload: list }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
