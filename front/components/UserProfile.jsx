import { useCallback } from 'react';
import PropTypes from 'prop-types'
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn, userId }) => {
  const onLogOut = useCallback( () => {
    setIsLoggedIn(false);
  }, [])

  return ( 
    <Card actions={[
      <div key='twit'>twit<br/>0</div>,
      <div key='follower'>follower<br/>0</div>,
      <div key='following'>following<br/>0</div>
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>Hi</Avatar>}
        title={userId}
        description='state area'
      />
      <Button onClick={onLogOut}>Log Out</Button>
    </Card>
  )
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
}

export default UserProfile;