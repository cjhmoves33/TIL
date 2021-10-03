import { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  
  const style = useMemo( () => ({
    marginTop: '1rem',
    // borderBottom: '1px solid #d9d9d9',
  }), []
  )

  // const inputStyle = useMemo( () => ({
  //   width: '20rem'
  // }))

  return (
    <Form style={style}>
      <Input.Search addonBefore='닉네임' enterButton='수정' />
    </Form>
  )
};

export default NicknameEditForm;