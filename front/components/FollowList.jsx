import { useMemo } from 'react'
import PropTypes from 'prop-types';
import { List, Button, Card, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  const listStyle = useMemo( () => ({ padding: '0 1rem 1rem 1rem' , marginBottom: '2rem'}), []);
  const gridStyle = useMemo( () => ({ gutter: 8, xs: 3, sm:2 ,md: 3, lg: 3, xl: 3}), []);
  const loadStyle = useMemo( () => ({ textAlign: 'center' }), []);
  const cardStyle = useMemo( () => ({ marginTop: '1rem', textAlign: 'center' }), []);
  const dividerStyle = useMemo( () => ({ marginTop: '1rem', marginBottom: 0 }), []);
  
  const cardAction = useMemo( () => ([<DeleteOutlined key='remove' />]), []);

  return (
    <>
      <Divider orientation='left' style={dividerStyle} >{header}</Divider>
      <List
      style={listStyle}
      grid={gridStyle}
      loadMore={<div style={loadStyle}><Button>더 보기</Button></div>}
      dataSource={data}
      renderItem={ item => (
        <List.Item>
          <Card actions={cardAction} style={cardStyle} >
            <Card.Meta title={item.nickname} />
          </Card>
        </List.Item>
      )} />
      </>
  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default FollowList;