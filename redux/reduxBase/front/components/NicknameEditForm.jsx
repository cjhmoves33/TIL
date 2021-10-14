import { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  
  const style = useMemo( () => ({
    margin: '1rem',
    width: '18rem',
  }), [])

  return (
    <Form style={style}>
      <Input.Search addonBefore='닉네임 변경' enterButton='수정' />
    </Form>
  )
};

export default NicknameEditForm;