import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import React from "react";
import Modal from "react-modal";
import Buttons from "../../src/components/atoms/Button.js";
import StatusBlock from "../../src/components/molecules/StatusBlock";
import Inheaders from "../../src/components/organisms/Inheader";
import Issuetr from "../../src/components/organisms/Issuetr";
import Labeltext from "../../src/components/atoms/LabelText";
import TextBlock from "../../src/components/molecules/InputBlock";
import TextareaBlock from "../../src/components/molecules/TextareaBlock";
import Alert from "../../src/components//molecules/AlertBlock";

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

const Issuetable = styled.table`
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

const Modallabel = styled.div`
  max-width: 598px;
  margin: auto;
  textarea {
    min-height: 150px;
  }
  a {
    width: auto;
  }
`;

const Modalcontents = styled.div`
  padding: 32px 0px 16px;
`;

const Modalbuttons = styled.div`
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

function Issue({ issue, add_issue, edit_issue, delete_issue, filter_issue }) {
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

  let list = Object.values(issue);

  if (filTxt) {
    list = list.filter((value) => value.title.includes(filTxt));
  }

  const filter = (filter) => {
    setFilTxt(filter);
  };

  const delete_list = () => {
    delete_issue(check);
    setCheck([]);
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
    add_issue({ title: text, description: description });
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
    edit_issue({
      id: vals.id,
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
    setDescriptionEdit(val.description);
    setStatusEdit(val.status);
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
    const { id, checked } = e.target;
    setCheck([...check, id]);
    if (!checked) {
      setCheck(check.filter((item) => item !== id));
    }
  };

  const allChecked = () => {
    if (check.length === list.length) {
      setCheck([]);
    } else {
      const tmp = list.map(function (val) {
        return val.id.toString();
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
          <Inheaders
            open={() => setIsOpen(true)}
            delete={() => delete_list()}
            filter={(e) => filter(e.target.value)}
          />
        </Action>
        <Lists>
          <Issuetable>
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
              <Modallabel>
                <Labeltext>Issueを追加</Labeltext>
                <Modalcontents>
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
                </Modalcontents>
                <Alert error={error} />
                <Modalbuttons>
                  <Buttons success onClick={() => onSubmit()}>
                    作成
                  </Buttons>
                  <Buttons onClick={closeModal}>閉じる</Buttons>
                </Modalbuttons>
              </Modallabel>
            </Modal>

            <Modal
              isOpen={modalIsOpenEdit}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <Modallabel>
                <Labeltext>Issueを追加</Labeltext>
                <Modalcontents>
                  <TextBlock
                    label="タイトル"
                    default={vals.title}
                    onChange={(e) => setTextEdit(e.target.value)}
                    placeholder="タイトルを入力してください"
                  />
                  <TextareaBlock
                    label="説明"
                    default={vals.description}
                    onChange={(e) => setDescriptionEdit(e.target.value)}
                    placeholder="説明を入力してください"
                  />
                  <StatusBlock
                    label="ステータス"
                    onChange={(e) => setStatusEdit(e.target.value)}
                    default={vals.status}
                    options={statusOptions}
                  />
                </Modalcontents>
                <Alert error={error} />
                <Modalbuttons>
                  <Buttons success onClick={() => onSubmitEdit()}>
                    更新
                  </Buttons>
                  <Buttons onClick={() => closeModalEdit()}>閉じる</Buttons>
                </Modalbuttons>
              </Modallabel>
            </Modal>
            <tbody>
              {list.map((val, key) => (
                <Issuetr
                  key={key}
                  val={val}
                  openEdit={() => openEdit(val)}
                  checkedBox={checkedBox}
                  checked={check.includes(val.id.toString())}
                />
              ))}
              {!list[0] && (
                <tr>
                  <td colSpan="6">データがありません</td>
                </tr>
              )}
            </tbody>
          </Issuetable>
        </Lists>
      </Container>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return { issue: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_issue: (list) => dispatch({ type: "add_issue", payload: list }),
    edit_issue: (edittxt) => dispatch({ type: "edit_issue", payload: edittxt }),
    delete_issue: (list) => dispatch({ type: "delete_issue", payload: list }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
