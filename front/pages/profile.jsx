
// 서버가 작동 중일 때 컴포넌트를 새로 만든경우 '가끔' 서버가 인식하지 못하기도 한다. 그럴 땐 그냥 껏다가 키면 됨.
// http://localhost:3000/profile
// next.js가 컴포넌트와 url을 1대1 매핑을 해줌.
// next.js는 프론트서버를 가지고 있기 때문에 라우팅, SSR을 자동으로 해준다.

// import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

// 사용할 컴포넌트를 크게 미리 만들어 두고 작은 부분들을 코딩해 나간다.

const Profile = () => {
  // dummy data
  const followingList = [{ nickname: 'bok' }, { nickname: 'vung' }, { nickname: 'lee' },];
  const followerList = [{ nickname: 'bok' }, { nickname: 'vung' }, { nickname: 'lee' },];

  return (
    <>
      <Head>
        <title>my profile || node bird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList}/>
        <FollowList header='팔로워 목록' data={followerList}/>
      </AppLayout>
    </>
  );
}

export default Profile;