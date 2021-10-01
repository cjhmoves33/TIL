import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  return (
    <List
    style={{ marginBottom: '2rem' }}
    grid={{ gutter: 8, xs: 2, sm:3 ,md: 4 }}
    // size='small'
    // bordered
    header={<div>{header}</div>}
    loadMore={<div style={{ textAlign: 'center' }}><Button>더 보기</Button></div>}
    dataSource={data}
    renderItem={ item => (
      <List.Item style={{ marginTop: '1rem' }}>
        <Card actions={[<DeleteOutlined key='stop' />]} style={{ width: '7rem', textAlign: 'center' }} >
          <Card.Meta title={item.nickname} />
        </Card>
      </List.Item>
    )}
    >
    </List>
  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default FollowList;