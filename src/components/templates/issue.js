import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import React from 'react';
import Modal from 'react-modal';
import Search from '../molecules/searchblock';
import ActionButtons from '../molecules/ActionButtons';

const Checkbox = styled.input`
`;

const Section = styled.div`
  padding: 16px;
`;

const Container = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const Action = styled.div``;

const Inheader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Issueheader = styled.h2``;

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

const Issuetr = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
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

const Modallabeltext = styled.h2`
  padding: 0px 8px;
`;

const Modalcontents = styled.div`
  padding: 32px 0px 16px;
`;

const Modalcontentstitle = styled.div`
  padding: 16px;
`;

const Modalcontentstitlelabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Modalcontentstitleinput = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Modalcontentstitleinputtext = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

const Modalcontentsdescription = styled.div`
  padding: 16px;
`;

const Modalcontentsdescriptiontitle = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Modalcontentsdescriptiontext = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Modalcontentsdescriptionyextarea = styled.textarea`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

const Modalbuttons = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 8px;
`;

const Modalbuttoncreate = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);

  &:hover{
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

const Modalbuttonexit = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  font-size: 1rem;
`;

const Alert = styled.div`
  padding: 16px;
  min-height: 100px;
`;

const Alerttext = styled.p`
  color: rgb(215, 58, 73);
  background: rgba(215, 58, 73, 0.35);
  padding: 8px;
  border-radius: 6px;
`;

const Statusarea = styled.div`
  padding: 16px;
`;

const Statuslabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

Checkbox.defaultProps = { 
  type: 'checkbox'
};

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
    position: 'absolute',
    inset: '40px',
    border: '1px solid rgb(204, 204, 204)',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    borderradius: '4px',
    outline: 'none',
    padding: '20px',
  },
};

function Issue({ issue,add_issue,edit_issue,delete_issue }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = React.useState(false);
  const [text, setText] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [vals, setVal] = React.useState('');
  const [textedit, settextedit] = React.useState('');
  const [descriptionedit, setdescriptionedit] = React.useState('');
  const [statusedit, setstatusedit] = React.useState('');
  const [error, setError] = React.useState('');
  const [erroredit, setErroredit] = React.useState('');
  const [check, setcheck] = React.useState([]);

  const List = Object.values(issue);
  const Status = ['Open','Close']
  const onSubmit = () => {
    if (!text) {
      setError({message:'タイトル'})
      return
    }
    if (!description) {
      setError({message:'説明'})
      return
    }

    add_issue({title:text,description:description})
    setError('');
    setText('');
    setDescription('');
    setIsOpen(false)
  };

  const onSubmitEdit = () => {
    if(!textedit){
      setErroredit({message:'タイトル'})
      return;
    }
    if(!descriptionedit){
      setErroredit({message:'説明'})
      return;
    }
    edit_issue({id:vals.id,textedit:textedit,descriptionedit:descriptionedit,statusedit:statusedit})
    setErroredit()
    setIsOpenEdit(false)
  }
  
  const openEdit = (val) => {
    
    setIsOpenEdit(true)
    setVal(val)
    settextedit(val.title)
    setdescriptionedit(val.description)
    setstatusedit(val.status)
  }

  const closeModal = () => {
    setText('')
    setDescription('')
    setIsOpen(false)
  }

  const closeModalEdit = () => {
    setErroredit('')
    setIsOpenEdit(false)
  }

  const onChangeText = (e) => {
    setText(e.target.value)
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  };



  const checkedbox = (e) => {
    e.stopPropagation()
    const { id, checked } = e.target
    setcheck([...check, id])
    if (!checked) {
      setcheck(check.filter(item => item !== id))
    }
  }

  const AllChecked = () => {
    if(check.length === List.length){
      setcheck([])
    }else{
      const tmp = List.map(function(val){
        return val.id.toString()
      });
      setcheck(tmp)
    }
  }

  return (
    <Section>
      <Container>
        <Action>
          <Inheader>
            <Issueheader>Issue</Issueheader>
            <Search/>
            <ActionButtons />
          </Inheader> 
        </Action>
        <Lists>
          <Issuetable>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" onChange={AllChecked}/>
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
                <Modallabeltext>Issueを追加</Modallabeltext>
                <Modalcontents>
                  <Modalcontentstitle>
                    <Modalcontentstitlelabel>タイトル</Modalcontentstitlelabel>
                    <Modalcontentstitleinput>
                      <Modalcontentstitleinputtext
                        placeholder="タイトルを入力してください"
                        value={text}
                        onChange={onChangeText}
                      ></Modalcontentstitleinputtext>
                    </Modalcontentstitleinput>
                  </Modalcontentstitle>
                  <Modalcontentsdescription>
                    <Modalcontentsdescriptiontitle>
                      説明
                    </Modalcontentsdescriptiontitle>
                    <Modalcontentsdescriptiontext>
                      <Modalcontentsdescriptionyextarea
                        placeholder="説明を入力してください"
                        value={description}
                        onChange={onChangeDescription}
                      ></Modalcontentsdescriptionyextarea>
                    </Modalcontentsdescriptiontext>
                  </Modalcontentsdescription>
                </Modalcontents>
                <Alert>
                {error &&
                    <Alerttext>{error.message}を入力してください</Alerttext>
                }
                </Alert>
                <Modalbuttons>
                  <Modalbuttoncreate onClick={() => onSubmit()}>
                    作成
                  </Modalbuttoncreate>
                  <Modalbuttonexit onClick={() => closeModal()}>
                    閉じる
                  </Modalbuttonexit>
                </Modalbuttons>
              </Modallabel>
            </Modal>
            <Modal
              isOpen={modalIsOpenEdit}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Modallabel>
                <Modallabeltext>Issueを追加</Modallabeltext>
                <Modalcontents>
                  <Modalcontentstitle>
                    <Modalcontentstitlelabel>タイトル</Modalcontentstitlelabel>
                    <Modalcontentstitleinput>
                      <Modalcontentstitleinputtext
                        placeholder="タイトルを入力してください"
                        defaultValue={vals.title}
                        onChange={e => settextedit(e.target.value)}
                      ></Modalcontentstitleinputtext>
                    </Modalcontentstitleinput>
                  </Modalcontentstitle>
                  <Modalcontentsdescription>
                    <Modalcontentsdescriptiontitle>
                      説明
                    </Modalcontentsdescriptiontitle>
                    <Modalcontentsdescriptiontext>
                      <Modalcontentsdescriptionyextarea
                        placeholder="説明を入力してください"
                        defaultValue={vals.description}
                        onChange={e => setdescriptionedit(e.target.value)}
                      ></Modalcontentsdescriptionyextarea>
                    </Modalcontentsdescriptiontext>
                  </Modalcontentsdescription>
                </Modalcontents>
                <Statusarea>
                  <Statuslabel>
                    ステータス
                  </Statuslabel>
                  <select defaultValue={vals.status} onChange={e => setstatusedit(e.target.value)}>
                    <option value="0">Open</option>
                    <option value="1">Close</option>
                  </select>
                </Statusarea>
                <Alert>
                {erroredit &&
                    <Alerttext>{erroredit.message}を入力してください</Alerttext>
                }
                </Alert>
                <Modalbuttons>
                  <Modalbuttoncreate onClick={() => onSubmitEdit()}>
                    更新
                  </Modalbuttoncreate>
                  <Modalbuttonexit onClick={() => closeModalEdit()}>
                    閉じる
                  </Modalbuttonexit>
                </Modalbuttons>
              </Modallabel>
            </Modal>
            <tbody>
              {List.map((val,key) =>
                <Issuetr key={key} onClick={() => openEdit(val)}>
                  <td>
                    <Checkbox 
                    id={val.id}
                    onChange={checkedbox}
                    checked={check.includes(val.id.toString())}
                    />
                  </td>
                  <td>{val.title}</td>
                  <td>{Status[val.status]}</td>
                  <td>{val.ctuser}</td>
                  <td>{val.ctdate}</td>
                  <td>{val.update}</td>
                </Issuetr>
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
    add_issue: (list) => dispatch({ type: 'add_issue', payload: list }),
    edit_issue: (edittxt) => dispatch({type: 'edit_issue', payload: edittxt}),
    delete_issue: (list) => dispatch({ type: 'delete_issue', payload: list }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
