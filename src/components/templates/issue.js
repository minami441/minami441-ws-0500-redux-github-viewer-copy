import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import React from "react";
import Modal from "react-modal";
import Buttons from "../atoms/Button";
import StatusBlock from "../molecules/StatusBlock";
import Inheaders from "../organisms/Inheader";
import Issuetr from "../organisms/Issuetr";
import Labeltext from "../atoms/LabelText";
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
  const [textedit, setTextEdit] = React.useState("");
  const [descriptionedit, setDescriptionEdit] = React.useState("");
  const [statusedit, setStatusEdit] = React.useState("");
  const [error, setError] = React.useState("");
  const [check, setCheck] = React.useState([]);
  const [filtertxt, setFilter] = React.useState();

  const List = Object.values(issue);

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
    if (filtertxt) {
      filter_issue(filtertxt);
    }
    setError("");
    setText("");
    setDescription("");
    setIsOpen(false);
  };

  const filter = (filter) => {
    setFilter(filter);
    filter_issue(filter);
  };

  const onSubmitEdit = () => {
    if (!textedit) {
      setError({ message: "タイトル" });
      return;
    }
    if (!descriptionedit) {
      setError({ message: "説明" });
      return;
    }

    edit_issue({
      id: vals.id,
      textedit: textedit,
      descriptionedit: descriptionedit,
      statusedit: statusedit,
    });
    if (filtertxt) {
      filter_issue(filtertxt);
    }
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

  const checkedbox = (e) => {
    e.stopPropagation();
    const { id, checked } = e.target;
    setCheck([...check, id]);
    if (!checked) {
      setCheck(check.filter((item) => item !== id));
    }
  };

  const AllChecked = () => {
    if (check.length === List.length) {
      setCheck([]);
    } else {
      const tmp = List.map(function (val) {
        return val.id.toString();
      });
      setCheck(tmp);
    }
  };

  return (
    <Section>
      <Container>
        <Action>
          <Inheaders
            open={() => setIsOpen(true)}
            delete={() => delete_issue(check)}
            filter={(e) => filter(e.target.value)}
          />
        </Action>
        <Lists>
          <Issuetable>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onChange={AllChecked} />
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
                    onChange={(e) => setStatusEdit(e.target.value)}
                    default={vals.status}
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
              {List.map((val, key) => (
                <Issuetr
                  key={key}
                  val={val}
                  openEdit={() => openEdit(val)}
                  checkedbox={checkedbox}
                  checked={check.includes(val.id.toString())}
                />
              ))}
              {!List[0] && <td colspan="6">データがありません</td>}
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
    filter_issue: (filtertxt) =>
      dispatch({ type: "filter_issue", payload: filtertxt }),
    edit_issue: (edittxt) => dispatch({ type: "edit_issue", payload: edittxt }),
    delete_issue: (list) => dispatch({ type: "delete_issue", payload: list }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
