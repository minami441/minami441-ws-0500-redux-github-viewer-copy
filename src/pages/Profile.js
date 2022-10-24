import styled from "styled-components";
import { connect } from "react-redux";
import user from "../store/User";

const Profiler = styled.div`
  padding: 16px;
  margin: auto;
`;

const ProfileTitle = styled.h1`
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

const ProfileContents = styled.div`
  margin: 32px 0px;
  display: flex;
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const ProfileImage = styled.div`
  padding: 16px;
  width: 50%;
`;

const ProfileLeft = styled.div``;

const ProfileLabel = styled.label`
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

const ProfileUser = styled.div``;

const ProfileMail = styled.div``;

function Profile(user) {
  const List = Object.values(user)[0];
  return (
    <Profiler store={user}>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileContents>
        <ProfileImage>
          <ProfileLeft>
            <ProfileLabel>プロフィール</ProfileLabel>
            <Profilep>
              <img
                src="https://avatars1.githubusercontent.com/u/25723193?s=60&amp;u=5f2d871352830fdf1a79ee285e0712044105ca91&amp;v=4"
                alt="プロフィール"
              />
            </Profilep>
          </ProfileLeft>
        </ProfileImage>
        <ProfileText>
          <ProfileUser>
            <ProfileLabel>ユーザー名</ProfileLabel>
            <Profilep>{List.name}</Profilep>
          </ProfileUser>
          <ProfileMail>
            <ProfileLabel>メールアドレス</ProfileLabel>
            <Profilep>{List.mail}</Profilep>
          </ProfileMail>
        </ProfileText>
      </ProfileContents>
    </Profiler>
  );
}
const mapStateToProps = (state) => {
  return { user: user };
};

export default connect(mapStateToProps)(Profile);
