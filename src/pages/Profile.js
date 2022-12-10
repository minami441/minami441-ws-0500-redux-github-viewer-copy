import styled from "styled-components";
import axios from "axios";
import React, { useEffect } from "react";

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

const ProfileBlock = styled.div``;

function Profile() {
  return (
    <Profiler>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileContents>
        <ProfileImage>
          <ProfileLeft>
            <ProfileLabel>プロフィール</ProfileLabel>
            <Profilep>
              <img src={user.avatar_url} alt="プロフィール" />
            </Profilep>
          </ProfileLeft>
        </ProfileImage>
        <ProfileText>
          <ProfileBlock>
            <ProfileLabel>ユーザー名</ProfileLabel>
            <Profilep>{user.name}</Profilep>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileLabel>アカウントURL</ProfileLabel>
            <Profilep>
              <a
                href={`https://github.com/${user.login}`}
              >{`https://github.com/${user.login}`}</a>
            </Profilep>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileLabel>フォロー数</ProfileLabel>
            <Profilep>{user.following}</Profilep>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileLabel>フォロワー数</ProfileLabel>
            <Profilep>{user.followers}</Profilep>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileLabel>パブリックレポジトリ数</ProfileLabel>
            <Profilep>{user.public_repos}</Profilep>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileLabel>プライベートレポジトリ数</ProfileLabel>
            <Profilep>{user.private_repos}</Profilep>
          </ProfileBlock>
        </ProfileText>
      </ProfileContents>
    </Profiler>
  );
}

export default Profile;
