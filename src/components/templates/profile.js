import styled from 'styled-components';
import { connect } from 'react-redux';
import user from '../user';

const Profiler = styled.div`
  padding: 16px;
  margin: auto;
`;

const Profiletitle = styled.h1`
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

const Profilecontents = styled.div`
  margin: 32px 0px;
  display: flex;
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Profileimage = styled.div`
  padding: 16px;
  width: 50%;
`;

const Profileleft = styled.div``;

const Profilelabel = styled.label`
  color: rgb(88, 96, 105);
`;

const Profilep = styled.p`
  padding: 16px 0px;
  font-size: 1.2rem;
`;

const ProfileText = styled.div`
  padding: 16px;
  width: 50%;
`;

const Profileuser = styled.div``;

const Profilemail = styled.div``;

function Profile(user) {
  const list = Object.values(user)[0]
  return (
    <Profiler store={user}>
      <Profiletitle>Profile</Profiletitle>
      <Profilecontents>
        <Profileimage>
          <Profileleft>
            <Profilelabel>プロフィール</Profilelabel>
            <Profilep>
              <img
                src="https://avatars1.githubusercontent.com/u/25723193?s=60&amp;u=5f2d871352830fdf1a79ee285e0712044105ca91&amp;v=4"
                alt="プロフィール"
              />
            </Profilep>
          </Profileleft>
        </Profileimage>
        <ProfileText>
          <Profileuser>
            <Profilelabel>ユーザー名</Profilelabel>
            <Profilep>{list.name}</Profilep>
          </Profileuser>
          <Profilemail>
            <Profilelabel>メールアドレス</Profilelabel>
            <Profilep>{list.mail}</Profilep>
          </Profilemail>
        </ProfileText>
      </Profilecontents>
    </Profiler>
  );
}
const mapStateToProps = (state) => {
  return { user: user };
};

export default connect(mapStateToProps)(Profile);
